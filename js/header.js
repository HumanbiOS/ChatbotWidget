import { numberToPixel, aplyStylesToElement } from './helper';

class Header {
  constructor(parent, width, height, backgroundColor) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.bottomMargin = 5;
    this.style = {
      width: numberToPixel(width),
      height: numberToPixel(height - this.bottomMargin),
      backgroundColor: backgroundColor,
      borderRadius: '15px 15px 0 0',
      marginBottom: numberToPixel(this.bottomMargin),
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
