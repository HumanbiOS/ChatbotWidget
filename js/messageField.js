import Component from './component';
import Message from './messages/message';
import MessageWithButtons from './messages/messageWithButtons';
import { numberToPixel } from './services/helper';
import { setupWebsocket, sendMessage } from './services/client';

class MessageField extends Component {
  constructor(parent, height) {
    super(parent);
    this.style = {
      height: numberToPixel(height),
      overflowY: 'auto',
    };

    super.render();
    setupWebsocket((message) => this.onBotMessage(message));
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

  onUserMessage(message) {
    this.addMessage(message, true);
    this.scrollDown();
    sendMessage(message);
  }

  onBotMessage(data) {
    console.log('Message data:', data);
    if (data.buttons.length) {
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
