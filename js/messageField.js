import Component from './component';
import Message from './messages/message';
import MessageWithButtons from './messages/messageWithButtons';
import { numberToPixel } from './services/helper';
import { setupWebsocket, sendMessage } from './services/client';

class MessageField extends Component {
  constructor(parent, top, bottom) {
    super(parent);
    this.style = {
      position: 'absolute',
      bottom: numberToPixel(bottom),
      left: '0',
      right: '0',
      top: numberToPixel(top),
      overflowY: 'auto',
    };

    super.render();
    setupWebsocket((data) => this.onServerMessage(data));
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'chat-bot-scrollbar';
  }

  addMessage(text, isUser) {
    this.children.push(new Message(this.element, text, isUser));
  }

  addMessageWithButtons(text, isUser, buttonTexts) {
    console.log(buttonTexts);
    this.children.push(
      new MessageWithButtons(this.element, text, isUser, buttonTexts, (text) =>
        this.onUserMessage(text)
      )
    );
  }

  onServerMessage(data) {
    if (data.user.first_name == 'HumanBios') {
      this.onBotMessage(data);
    } else {
      this.onUserMessage(data.message.text, false);
    }
  }

  onUserMessage(message, send = true) {
    this.addMessage(message, true);
    this.scrollDown();
    if (send) {
      sendMessage(message);
    }
  }

  onBotMessage(data) {
    console.log('Message data:', data);
    if (data.buttons) {
      this.addMessageWithButtons(data.message.text, false, data.buttons);
    } else {
      this.addMessage(data.message.text, false);
    }
    this.scrollDown();
  }

  addMessage(text, isUser) {
    this.children.push(new Message(this.element, text, isUser));
  }

  scrollDown() {
    this.element.scrollTop = this.element.scrollHeight;
  }
}

export default MessageField;
