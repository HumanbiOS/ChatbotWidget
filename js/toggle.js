import { numberToPixel, aplyStylesToElement } from './services/helper';
class Toggle {
  constructor(
    parent,
    bottom,
    right,
    diameter,
    backgroundColor,
    toggleCallback
  ) {
    this.active = false;

    this.style = {
      position: 'fixed',
      bottom: numberToPixel(bottom),
      right: numberToPixel(right),
      width: numberToPixel(diameter),
      height: numberToPixel(diameter),
      borderRadius: numberToPixel(diameter / 2),
      backgroundColor: backgroundColor,
      boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)',
    };

    this.create(parent, toggleCallback);
  }

  create(parent, toggleCallback) {
    this.element = document.createElement('div');
    aplyStylesToElement(this.style, this.element);
    this.element.onclick = toggleCallback;
    parent.appendChild(this.element);
  }
}

export default Toggle;
