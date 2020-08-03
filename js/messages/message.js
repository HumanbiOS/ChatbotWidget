import { numberToPixel } from '../services/helper';
import Component from '../component';
import Text from './text';

class Message extends Component {
  constructor(parent, text, right, backgroundColor, textColor) {
    super(parent);
    this.right = right;
    this.text = text;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.style = {
      margin: numberToPixel(5),
      marginBottom: numberToPixel(20),
      overflow: 'hidden',
    };

    this.render();
  }

  addChildren() {
    const textChildren = [
      new Text(
        this.element,
        this.text,
        this.right,
        this.backgroundColor,
        this.textColor
      ),
    ];
    return textChildren;
  }

  create() {
    this.element = document.createElement('div');
  }
}

export default Message;
