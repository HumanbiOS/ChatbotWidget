import Component from '../component';
import Button from './button';

class ButtonContainer extends Component {
  constructor(
    parent,
    right,
    backgroundColor,
    textColor,
    buttonMessages,
    callback
  ) {
    super(parent);

    this.callback = callback;
    this.buttonMessages = buttonMessages;
    this.right = right;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;

    this.style = {
      display: 'flex',
      justifyContent: 'space-between',
    };

    this.render();
  }

  addChildren() {
    let buttons = [];
    this.buttonMessages.forEach((message) => {
      buttons.push(
        new Button(
          this.element,
          message.text,
          this.right,
          this.backgroundColor,
          this.textColor,
          (text) => this.callback(text)
        )
      );
    });
    this.children = buttons;
  }

  create() {
    this.element = document.createElement('div');
  }
}

export default ButtonContainer;
