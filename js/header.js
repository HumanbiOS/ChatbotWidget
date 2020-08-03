import Component from './component';
import { numberToPixel, aplyStylesToElement } from './services/helper';

class Header extends Component {
  constructor(parent, height, bottomMargin, backgroundColor) {
    super(parent);
    this.style = {
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
