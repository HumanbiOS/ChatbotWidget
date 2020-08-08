import Root from './root';
import Message from './messages/message';
import MessageWithButtons from './messages/messageWithButtons';

import { addStylesheet } from './services/helper';
import Container from './container';

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
    this.container = new Container(this.element, {
      bottom: this.bottom,
      right: this.right,
      height: this.height,
      width: this.width,
      backgroundColor: this.backgroundColor,
      diameterToggle: this.diameterToggle,
      baseColor: this.baseColor,
    });
  }
}

function init() {
  new ChatBot();
  addStylesheet('css/styles.css');
}

window.addEventListener('load', init());
