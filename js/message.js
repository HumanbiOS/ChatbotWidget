import { numberToPixel, aplyStylesToElement } from './helper';

class Message {
  rowStyle;
  textStyle;

  text = '';

  constructor(parent, text, right, backgroundColor, textColor) {
    this.rowStyle = {
      margin: numberToPixel(5),
      marginBottom: numberToPixel(20),
      overflow: 'hidden',
    };

    this.textStyle = {
      backgroundColor: backgroundColor,
      borderRadius: numberToPixel(5),
      color: textColor,
      padding: numberToPixel(10),
      display: 'inline-block',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: numberToPixel(12),
      lineHeight: numberToPixel(20),
      fontWeight: '500',
      fontSmoothing: 'antialiased',
    };

    if (right) {
      this.textStyle.float = 'right';
      this.textStyle.marginLeft = '20px';
    } else {
      this.textStyle.marginRight = '20px';
    }

    this.text = text;

    this.create(parent);
  }

  create(parent) {
    this.divRow = document.createElement('div');
    this.divText = document.createElement('div');
    this.divText.textContent = this.text;
    aplyStylesToElement(this.rowStyle, this.divRow);
    aplyStylesToElement(this.textStyle, this.divText);
    this.divRow.appendChild(this.divText);
    parent.appendChild(this.divRow);
  }
}

export default Message;
