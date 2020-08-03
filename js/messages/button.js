import { numberToPixel } from '../services/helper';
import Component from '../component';

class Button extends Component {
  constructor(parent, text, right, backgroundColor, textColor, callback) {
    super(parent);

    this.callback = callback;

    this.style = {
      backgroundColor: backgroundColor,
      borderRadius: numberToPixel(5),
      color: textColor,
      display: 'inline-block',
      padding: numberToPixel(5),
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: numberToPixel(12),
      lineHeight: numberToPixel(20),
      fontWeight: 'bold',
      fontSmoothing: 'antialiased',
      outline: 'none',
      border: 'none',
      marginTop: numberToPixel(12),
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
    this.element = document.createElement('button');
    this.element.setAttribute('type', 'button');
    this.element.textContent = this.text;
    this.element.onclick = () => this.callback(this.text);
  }
}

export default Button;
