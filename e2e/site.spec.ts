import { expect, test } from '@playwright/test';

test('el sitemap coincide con páginas publicables', async ({ request }) => {
  const sitemapResponse = await request.get('/sitemap.xml');
  expect(sitemapResponse.ok()).toBeTruthy();
  const sitemap = await sitemapResponse.text();
  const routes = [...sitemap.matchAll(/<loc>https:\/\/folio\.unwoke\.ninja([^<]*)<\/loc>/g)].map((match) => match[1] || '/');

  expect(routes.length).toBeGreaterThan(20);
  expect(new Set(routes).size).toBe(routes.length);

  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), `${route} debería responder 200`).toBe(200);
    const html = await response.text();
    expect(html, `${route} debería tener un contenido principal`).toContain('id="main-content"');
    expect((html.match(/<h1\b/g) ?? []).length, `${route} debería tener un h1`).toBe(1);
  }
});

test('el recorrido principal lleva del ejercicio al ejemplo', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Pasá un diseño');

  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();

  if (testInfo.project.name === 'mobile-chromium') {
    await page.getByText('Menú', { exact: true }).click();
    await expect(page.getByRole('navigation', { name: 'Navegación principal para pantallas chicas' })).toBeVisible();
  }

  await page.getByRole('link', { name: /Preparar una página/ }).first().click();
  await expect(page).toHaveURL(/\/aprender\/preparar-un-diseno\/$/);
  await page.getByLabel('Resultado de la página').fill('Mostrar el trabajo del estudio y recibir una consulta concreta.');
  await expect(page.locator('[data-brief-output]')).toContainText('Mostrar el trabajo del estudio');

  await page.getByRole('button', { name: 'Copiar pedido' }).click();
  await expect(page.locator('[data-copy-status]')).toContainText(/copiado|manualmente/);
});

test('ejemplos, imágenes y anclas funcionan sin desborde', async ({ page }) => {
  for (const route of ['/', '/aprender/', '/guias/del-diseno-a-una-web-con-ia/', '/ejemplos/#plantillas', '/t/01/', '/t/14/']) {
    await page.goto(route);
    await expect(page.locator('main')).toBeVisible();
    const overflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    expect(overflows, `${route} no debería desbordar horizontalmente`).toBeFalsy();
  }

  await page.goto('/ejemplos/#plantillas');
  await expect(page.getByRole('heading', { name: 'Mismos datos, quince composiciones.' })).toBeVisible();
  const preview = page.locator('.template-card img').first();
  await expect(preview).toBeVisible();
  await expect.poll(() => preview.evaluate((image: HTMLImageElement) => image.currentSrc)).toContain('/images/optimized/');
  await preview.locator('..').click();
  await expect(page).toHaveURL(/\/t\/01\/$/);
});

test('la solicitud de reserva prepara un enlace de WhatsApp', async ({ page }) => {
  await page.addInitScript(() => {
    window.open = ((url?: string | URL) => {
      document.documentElement.dataset.openedUrl = String(url ?? '');
      return null;
    }) as typeof window.open;
  });

  await page.goto('/t/14/');
  const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10);
  await page.getByLabel('Nombre').fill('Ana');
  await page.getByLabel('Personas').selectOption('4');
  await page.getByLabel('Día').fill(tomorrow);
  await page.getByLabel('Horario').selectOption('21:00');
  await page.getByRole('button', { name: 'Solicitar por WhatsApp' }).click();

  const openedUrl = await page.locator('html').getAttribute('data-opened-url');
  expect(openedUrl).toContain('https://wa.me/5491148325566');
  expect(decodeURIComponent(openedUrl ?? '')).toContain('Ana');
  expect(decodeURIComponent(openedUrl ?? '')).toContain('Personas: 4');
});
