import Container from './container';
import Message from './message';
import Header from './header';

class ChatBot {
  right = 200;
  width = 300;
  height = 400;
  backgroundColor = '#FCF6F5FF';
  messageColour = '#89ABE3FF';
  messageColourBot = '#75E6DA';

  containerElement;
  messages = [];

  constructor() {
    this.containerElement = new Container(
      this.right,
      this.height,
      this.width,
      this.backgroundColor,
      'chat-bot'
    );

    new Header(this.width, 20, 'blue', this.containerElement.element);

    this.messages.push(
      new Message(
        this.messageColour,
        'Hallo',
        true,
        this.containerElement.element
      )
    );
    this.messages.push(
      new Message(
        this.messageColourBot,
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        false,
        this.containerElement.element
      )
    );
    this.messages.push(
      new Message(
        this.messageColour,
        'Gut das sie hier sind',
        true,
        this.containerElement.element
      )
    );
    this.messages.push(
      new Message(
        this.messageColourBot,
        'Hallo',
        false,
        this.containerElement.element
      )
    );
  }
}

function init() {
  const chatBot = new ChatBot();
}
window.addEventListener('load', init());
