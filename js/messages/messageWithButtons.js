import { numberToPixel } from '../helper';
import Component from '../component';
import Text from './text';

//TODO Extends
class MassageWithButtons extends Component {
  constructor(parent, text, right, backgroundColor, textColor, buttonTexts) {
    super(parent);
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
    const textChildren = [
      new Text(
        this.element,
        this.text,
        this.right,
        this.backgroundColor,
        this.textColor
      ),
    ];
    this.buttonTexts.forEach((message) => {
      textChildren.push(
        new Text(
          this.element,
          message.text,
          this.right,
          this.backgroundColor,
          this.textColor
        )
      );
    });
    return textChildren;
  }

  create() {
    this.element = document.createElement('div');
  }
}

export default MassageWithButtons;
