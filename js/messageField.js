import { aplyStylesToElement, numberToPixel, applyToolbar } from './helper';

class MessageField {
  constructor(parent, height) {
    this.style = {
      height: numberToPixel(height),
      overflowY: 'auto',
    };

    this.create(parent);
  }

  create(parent) {
    this.element = document.createElement('div');
    aplyStylesToElement(this.style, this.element);
    this.element.className = 'chat-bot-scrollbar';
    parent.appendChild(this.element);
  }

  scrollDown() {
    this.element.scrollTop = this.element.scrollHeight;
  }
}

export default MessageField;
