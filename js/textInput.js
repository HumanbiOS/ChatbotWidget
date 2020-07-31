import { aplyStylesToElement, numberToPixel } from './helper';

class TextInput {
  constructor(parent, width, height, placeholder, messageCallback) {
    const padding = height / 4;
    this.styleText = {
      height: numberToPixel(height - padding * 2),
      width: numberToPixel(width - height - padding * 2),
      resize: 'none',
      fontSize: '13px',
      fontWeight: '400',
      padding: numberToPixel(padding),
      border: 'none',
      outline: 'none',
      borderBottomLeftRadius: numberToPixel(15),
      verticalAlign: 'middle',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: numberToPixel(12),
      lineHeight: numberToPixel(20),
      fontWeight: '500',
      fontSmoothing: 'antialiased',
    };

    this.styleButton = {
      height: numberToPixel(height / 2),
      width: numberToPixel(height / 2),
      margin: numberToPixel(padding),
      cursor: 'pointer',
      color: 'gray',
      borderRadius: numberToPixel(height),
      float: 'right',
      border: 'none',
      outline: 'none',
    };

    this.placeholder = placeholder;
    this.messageCallback = messageCallback;

    this.create(parent);
  }

  create(parent) {
    this.element = document.createElement('div');

    //Textarea
    this.textarea = document.createElement('textarea');
    aplyStylesToElement(this.styleText, this.textarea);
    this.textarea.placeholder = this.placeholder;
    this.textarea.className = 'chat-bot-scrollbar';
    this.textarea.onkeypress = (event) => this.onKeyPress(event);
    this.element.appendChild(this.textarea);

    //Send
    this.button = document.createElement('button');
    aplyStylesToElement(this.styleButton, this.button);
    this.button.onmouseup = () => this.onMouseUp();
    this.element.appendChild(this.button);

    parent.appendChild(this.element);
  }

  onKeyPress(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      if (this.textarea.value) {
        this.onSubmit(this.textarea.value);
      }
    }
  }

  onMouseUp() {
    if (this.textarea.value) {
      this.onSubmit(this.textarea.value);
    }
  }

  onSubmit(value) {
    this.textarea.value = null;
    this.messageCallback(value);
  }
}

export default TextInput;
