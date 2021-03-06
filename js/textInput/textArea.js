import { aplyStylesToElement, numberToPixel } from '../services/helper';
import Component from '../component';

class TextArea extends Component {
  constructor(parent, width, height, placeholder, onkeypress) {
    super(parent);

    this.placeholder = placeholder;
    this.onkeypress = onkeypress;
    const padding = height / 4;
    this.divStyle = {
      width: 'auto',
      display: 'table-cell',
    };
    this.style = {
      height: numberToPixel(height - padding * 2),
      width: '100%',
      resize: 'none',
      padding: numberToPixel(padding),
      border: 'none',
      outline: 'none',
      borderBottomLeftRadius: numberToPixel(15),
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: numberToPixel(16),
      lineHeight: numberToPixel(20),
      fontWeight: '500',
      fontSmoothing: 'antialiased',
      overflowY: 'auto',
    };

    this.render();
  }

  create() {
    this.div = document.createElement('div');
    this.div.className = 'chat-bot-input-container';
    this.element = document.createElement('textarea');
    this.element.placeholder = this.placeholder;
    this.element.className = 'chat-bot-scrollbar';
    this.element.onkeypress = (event) => this.onkeypress(event);
  }

  append() {
    this.div.appendChild(this.element);
    this.parent.appendChild(this.div);
  }

  applyStyle() {
    aplyStylesToElement(this.style, this.element);
    aplyStylesToElement(this.divStyle, this.div);
  }
}

export default TextArea;
