import Component from './component';
import { numberToPixel, aplyStylesToElement } from './helper';

class Header extends Component {
  constructor(parent, width, height, bottomMargin, backgroundColor) {
    super(parent);
    this.style = {
      width: numberToPixel(width),
      height: numberToPixel(height - bottomMargin),
      backgroundColor: backgroundColor,
      borderRadius: '15px 15px 0 0',
      marginBottom: numberToPixel(bottomMargin),
    };
    super.render();
  }

  create() {
    this.element = document.createElement('div');
  }
}

export default Header;
