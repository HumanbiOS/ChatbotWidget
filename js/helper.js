export function numberToPixel(number) {
  return number + 'px';
}

export function aplyStylesToElement(style, domElement) {
  for (const [key, value] of Object.entries(style)) {
    domElement.style[key] = value;
  }
}
