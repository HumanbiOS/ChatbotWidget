import { numberToPixel } from '../services/helper';
import Component from '../component';
import Text from './text';
import ButtonContainer from './buttonContainer';

//TODO Extends
class MassageWithButtons extends Component {
  constructor(
    parent,
    text,
    right,
    backgroundColor,
    textColor,
    buttonTexts,
    callback
  ) {
    super(parent);
    this.callback = callback;
    this.right = right;
    this.text = text;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.buttonTexts = buttonTexts;
    this.style = {
      margin: numberToPixel(5),
      marginBottom: numberToPixel(20),
      overflow: 'hidden',
    };

    this.render();
  }

  addChildren() {
    const children = [
      new Text(
        this.element,
        this.text,
        this.right,
        this.backgroundColor,
        this.textColor
      ),
      new ButtonContainer(
        this.element,
        this.right,
        this.backgroundColor,
        this.textColor,
        this.buttonTexts,
        (text) => this.callback(text)
      ),
    ];
    return children;
  }

  create() {
    this.element = document.createElement('div');
  }
}

export default MassageWithButtons;
