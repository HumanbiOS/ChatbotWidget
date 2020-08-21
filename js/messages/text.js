import { numberToPixel, aplyStylesToElement } from '../services/helper';
import Component from '../component';

class Text extends Component {
  rowStyle;
  textStyle;

  text = '';

  constructor(parent, text, right, backgroundColor, textColor) {
    super(parent);

    this.style = {
      backgroundColor: backgroundColor,
      borderRadius: numberToPixel(5),
      color: textColor,
      padding: numberToPixel(10),
      display: 'inline-block',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: numberToPixel(12),
      lineHeight: numberToPixel(20),
      fontWeight: '500',
      fontSmoothing: 'antialiased',
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    };

    if (right) {
      this.style.float = 'right';
      this.style.marginLeft = '20px';
    } else {
      this.style.marginRight = '20px';
    }

    this.text = text;

    this.render();
  }

  create() {
    this.element = document.createElement('div');
    this.element.textContent = this.text;
  }
}

export default Text;
