import Component from './component';
import Header from './header';
import MessageField from './messageField';
import TextInput from './textInput/textInput';

class Chat extends Component {
  constructor(parent, props) {
    super(parent);
    this.props = props;
    this.active = false;
    this.inputHeight = 60;
    this.headerHeight = 60;
    this.messageField;

    super.render();
  }

  addChildren() {
    const header = new Header(this.element, {
      height: this.headerHeight - 5,
      bottomMargin: 5,
      backgroundColor: this.props.baseColor,
    });
    this.messageField = new MessageField(
      this.element,
      this.headerHeight,
      this.inputHeight
    );
    this.children = [
      header,
      this.messageField,
      new TextInput(
        this.element,
        this.width,
        this.inputHeight,
        'Send a message',
        (message) => this.messageField.onUserMessage(message)
      ),
    ];
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'chat-bot-chat';
  }

  toggle() {
    if (this.active) {
      this.element.style.display = 'none';
      this.active = false;
    } else {
      this.element.style.display = 'block';
      this.active = true;
      this.messageField.scrollDown();
    }
  }
}

export default Chat;
