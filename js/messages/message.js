import { numberToPixel } from '../services/helper';
import Component from '../component';
import Text from './text';

class Message extends Component {
  constructor(parent, text, isUser) {
    super(parent);
    this.isUser = isUser;
    this.text = text;
    if (this.isUser) {
      this.backgroundColor = '#42a5f5';
      this.textColor = '#ffffff';
    } else {
      this.backgroundColor = '#f7f7f7';
      this.textColor = '#6c6c6c';
    }

    this.style = {
      margin: numberToPixel(5),
      marginBottom: numberToPixel(20),
      overflow: 'hidden',
    };

    this.render();
  }

  addChildren() {
    this.children.push(
      new Text(
        this.element,
        this.text,
        this.isUser,
        this.backgroundColor,
        this.textColor
      )
    );
  }

  create() {
    this.element = document.createElement('div');
  }
}

export default Message;
