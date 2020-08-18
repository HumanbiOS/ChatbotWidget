import Component from './component';
import { numberToPixel } from './services/helper';

class Header extends Component {
  constructor(parent, props) {
    super(parent);
    this.style = {
      height: numberToPixel(props.height - props.bottomMargin),
      backgroundColor: props.backgroundColor,
      borderRadius: '15px 15px 0 0',
      marginBottom: numberToPixel(props.bottomMargin),
    };
    super.render();
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'header';
  }
}

export default Header;
