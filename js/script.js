import Root from './root';
import Toggle from './toggle';
import Chat from './chat';
import Message from './messages/message';
import Header from './header';
import TextInput from './textInput';
import MessageField from './messageField';
import MessageWithButtons from './messages/messageWithButtons';
import { setupWebsocket, sendMessage } from './services/client';
import { addStylesheet } from './services/helper';

const chatbotStyle = {
  bottom: 20,
  right: 20,
  width: 340,
  height: 600,
  headerHeight: 60,
  inputHeight: 60,
  diameterToggle: 40,
  baseColor: '#42a5f5',
  backgroundColor: '#ffffff',
  get bgColorUser() {
    return this.baseColor;
  },
  textColorUser: '#ffffff',
  bgColorBot: '#f7f7f7',
  textColorBot: '#6c6c6c',
};

class ChatBot {
  messages = [];

  constructor() {
    //TODO
    for (const [key, value] of Object.entries(chatbotStyle)) {
      this[key] = value;
    }
    this.element = new Root('chat-bot').element;
    this.chat = new Chat(
      this.element,
      this.bottom,
      this.right + this.diameterToggle * 1.5,
      this.height,
      this.width,
      this.backgroundColor
    );

    this.toggel = new Toggle(
      this.element,
      this.bottom,
      this.right,
      this.diameterToggle,
      this.baseColor,
      () => this.chat.toggle()
    );

    new Header(this.chat.element, this.headerHeight, 5, this.baseColor);

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

    setupWebsocket((message) => this.onBotMessage(message));
  }

  addMessage(text, isUser) {
    const bgColor = isUser ? this.bgColorUser : this.bgColorBot;
    const textColor = isUser ? this.textColorUser : this.textColorBot;
    this.messages.push(
      new Message(this.messageField.element, text, isUser, bgColor, textColor)
    );
  }

  addMessageWithButtons(text, isUser, buttonTexts) {
    const bgColor = isUser ? this.bgColorUser : this.bgColorBot;
    const textColor = isUser ? this.textColorUser : this.textColorBot;
    this.messages.push(
      new MessageWithButtons(
        this.messageField.element,
        text,
        isUser,
        bgColor,
        textColor,
        buttonTexts,
        (text) => this.onUserMessage(text)
      )
    );
  }

  onUserMessage(message) {
    this.addMessage(message, true);
    this.messageField.scrollDown();
    sendMessage(message);
  }

  onBotMessage(data) {
    console.log('Message data:', data);
    if (data.buttons.length) {
      this.addMessageWithButtons(data.message.text, false, data.buttons);
    } else {
      this.addMessage(data.message.text, false);
    }
    this.messageField.scrollDown();
  }

  addButton(text) {}
}

function init() {
  new ChatBot();
  addStylesheet('css/styles.css');
}

window.addEventListener('load', init());
