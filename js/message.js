import { numberToPixel, aplyStylesToElement } from './helper';

class Message {
  rowStyle;
  textStyle;

  text = '';

  constructor(backgroundColor, text, left, parent) {
    this.rowStyle = {
      margin: numberToPixel(5),
      bottom: '0',
      overflow: 'hidden',
    };

    this.textStyle = {
      backgroundColor: backgroundColor,
      borderRadius: numberToPixel(5),
      paddingLeft: '5px',
      paddingRight: '5px',
      display: 'inline-block',
    };

    if (!left) {
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
