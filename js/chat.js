import { numberToPixel, aplyStylesToElement } from './services/helper';

class Chat {
  constructor(parent, bottom, right, height, width, backgroundColor) {
    this.active = false;

    this.style = {
      position: 'fixed',
      bottom: numberToPixel(bottom),
      right: numberToPixel(right),
      height: numberToPixel(height),
      width: numberToPixel(width),
      backgroundColor: backgroundColor,
      display: 'none',
      boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)',
      borderRadius: numberToPixel(15),
      mediaQuery: {
        query: '(max-width: 700px)',
        style: {
          get width() {
            const vW = Math.max(
              document.documentElement.clientWidth || 0,
              window.innerWidth || 0
            );
            return numberToPixel(vW - right);
          },
        },
      },
    };

    this.create(parent);
  }

  create(parent) {
    this.element = document.createElement('div');
    aplyStylesToElement(this.style, this.element);
    parent.appendChild(this.element);
  }

  toggle() {
    if (this.active) {
      this.element.style.display = 'none';
      this.active = false;
    } else {
      this.element.style.display = 'block';
      this.active = true;
    }
  }
}

export default Chat;
