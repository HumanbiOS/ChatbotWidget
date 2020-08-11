import { aplyStylesToElement, numberToPixel } from '../services/helper';
import Component from '../component';

class TextButton extends Component {
  constructor(parent, height, onMouseUp) {
    super(parent);
    this.onMouseUp = onMouseUp;
    const padding = height / 4;

    this.style = {
      display: 'table-cell',
      height: numberToPixel(height / 2),
      width: numberToPixel(height / 2),
      margin: numberToPixel(padding),
      cursor: 'pointer',
      backgroundColor: '#efefef',
      borderRadius: numberToPixel(height),
      float: 'right',
      border: 'none',
      outline: 'none',
    };

    this.render();
  }

  create() {
    this.element = document.createElement('div');
    this.element.onmouseup = () => this.onMouseUp();
  }
}

export default TextButton;
