import Message from './message';
import ButtonContainer from './buttonContainer';

//TODO This does not conform to Component Rethin Component
class MassageWithButtons extends Message {
  constructor(parent, text, isUser, buttonTexts, callback) {
    super(parent, text, isUser);

    this.buttonTexts = buttonTexts;
    this.callback = callback;

    this.addChildrenLate();
  }

  addChildrenLate() {
    this.children.push(
      new ButtonContainer(
        this.element,
        this.isUser,
        this.backgroundColor,
        this.textColor,
        this.buttonTexts,
        (text) => this.callback(text)
      )
    );
  }
}

export default MassageWithButtons;
