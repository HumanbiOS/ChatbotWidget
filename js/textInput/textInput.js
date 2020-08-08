import { aplyStylesToElement, numberToPixel } from '../services/helper';
import Component from '../component';
import TextArea from './textArea';
import TextButton from './textButton';

class TextInput extends Component {
  constructor(parent, width, height, placeholder, messageCallback) {
    super(parent);
    this.width = width;
    this.height = height;
    this.placeholder = placeholder;
    this.messageCallback = messageCallback;

    this.style = {
      bottom: 0,
      position: 'absolute',
      width: '100%',
    };

    this.render();
  }

  create() {
    this.element = document.createElement('div');
  }

  addChildren() {
    this.textArea = new TextArea(
      this.element,
      this.width,
      this.height,
      this.placeholder,
      (event) => this.onKeyPress(event)
    );
    this.children.push(this.textArea);
    this.children.push(
      new TextButton(this.element, this.height, () => this.onMouseUp())
    );
  }

  onKeyPress(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      if (this.textArea.element.value) {
        this.onSubmit(this.textArea.element.value);
      }
    }
  }

  onMouseUp() {
    if (this.textArea.element.value) {
      this.onSubmit(this.textArea.element.value);
    }
  }

  onSubmit(value) {
    this.textArea.element.value = null;
    this.messageCallback(value);
  }
}

export default TextInput;
