import Root from './root';
import Toggle from './toggle';
import Chat from './chat';
import Message from './message';
import Header from './header';
import TextInput from './textInput';
import MessageField from './messageField';

class ChatBot {
  bottom = 20;
  right = 200;
  width = 340;
  height = 600;
  headerHeight = 60;
  inputHeight = 60;
  diameterToggle = 40;
  baseColor = '#42a5f5';
  backgroundColor = '#ffffff';
  bgColorUser = this.baseColor;
  textColorUser = '#ffffff';
  bgColorBot = '#f7f7f7';
  textColorBot = '#6c6c6c';

  messages = [];

  constructor() {
    this.root = new Root('chat-bot');
    this.chat = new Chat(
      this.root.element,
      this.bottom,
      this.right + this.diameterToggle * 1.5,
      this.height,
      this.width,
      this.backgroundColor
    );

    this.toggel = new Toggle(
      this.root.element,
      this.bottom,
      this.right,
      this.diameterToggle,
      this.baseColor,
      () => this.chat.toggle()
    );

    new Header(
      this.chat.element,
      this.width,
      this.headerHeight,
      this.baseColor
    );

    this.messageField = new MessageField(
      this.chat.element,
      this.height - this.inputHeight - this.headerHeight
    );

    new TextInput(
      this.chat.element,
      this.width,
      this.inputHeight,
      'Send a message',
      (message) => this.onUserMessage(message)
    );
  }

  addMessage(text, isUser) {
    const bgColor = isUser ? this.bgColorUser : this.bgColorBot;
    const textColor = isUser ? this.textColorUser : this.textColorBot;
    this.messages.push(
      new Message(this.messageField.element, text, isUser, bgColor, textColor)
    );
  }

  onUserMessage(message) {
    this.addMessage(message, true);
    this.messageField.scrollDown();
    this.onBotMessage('Cool');
  }

  onBotMessage(message) {
    this.addMessage(message, false);
    this.messageField.scrollDown();
  }
}

function init() {
  const chatBot = new ChatBot();
}
window.addEventListener('load', init());
