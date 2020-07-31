import { numberToPixel, aplyStylesToElement } from './helper';

class Container {
  style = {};

  constructor(right, height, width, backgroundColor, tag) {
    this.tag = tag;
    this.style = {
      position: 'fixed',
      bottom: '0',
      right: numberToPixel(right),
      height: numberToPixel(height),
      width: numberToPixel(width),
      backgroundColor: backgroundColor,
      borderTop: '2px solid gray',
      borderLeft: '2px solid gray',
      borderRight: '2px solid gray',
    };

    this.create();
  }

  create() {
    this.element = document.getElementsByClassName(this.tag)[0];
    aplyStylesToElement(this.style, this.element);
  }
}

export default Container;
