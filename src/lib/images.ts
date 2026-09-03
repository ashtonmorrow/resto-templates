export function responsiveImage(src: string, width: number) {
  const key = src.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');
  const mobileWidth = Math.min(width, 640);

  return {
    srcset: `/images/optimized/${key}-640.webp ${mobileWidth}w, /images/optimized/${key}-full.webp ${width}w`,
  };
}
