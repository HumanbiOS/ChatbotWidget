import Component from './component';
import Header from './header';
import MessageField from './messageField';
import TextInput from './textInput/textInput';
import { numberToPixel, aplyStylesToElement } from './services/helper';

class Chat extends Component {
  constructor(parent, props) {
    super(parent);
    this.props = props;
    this.active = false;
    this.inputHeight = 60;
    this.headerHeight = 60;

    this.style = {
      position: 'fixed',
      bottom: numberToPixel(props.bottom),
      right: numberToPixel(props.right),
      height: numberToPixel(props.height),
      width: numberToPixel(props.width),
      backgroundColor: props.backgroundColor,
      display: 'none',
      boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)',
      borderRadius: numberToPixel(15),
      mediaQuery: {
        query: '(max-width: 700px)',
        style: {
          position: 'relative',
          bottom: 0,
          right: 0,
          height: '100%',
          width: '100%',
        },
      },
    };

    super.render();
  }

  addChildren() {
    const header = new Header(this.element, {
      height: this.headerHeight - 5,
      bottomMargin: 5,
      backgroundColor: this.props.baseColor,
    });
    const messageField = new MessageField(
      this.element,
      this.headerHeight,
      this.inputHeight
    );
    this.children = [
      header,
      messageField,
      new TextInput(
        this.element,
        this.width,
        this.inputHeight,
        'Send a message',
        (message) => messageField.onUserMessage(message)
      ),
    ];
  }

  create() {
    this.element = document.createElement('div');
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
