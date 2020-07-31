import { numberToPixel, aplyStylesToElement } from './helper';

class Header {
  constructor(width, height, backgroundColor, parent) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.style = {
      width: numberToPixel(width),
      height: numberToPixel(height),
      backgroundColor: backgroundColor,
    };
    this.create(parent);
  }

  create(parent) {
    this.element = document.createElement('div');
    aplyStylesToElement(this.style, this.element);
    parent.appendChild(this.element);
  }
}

export default Header;
