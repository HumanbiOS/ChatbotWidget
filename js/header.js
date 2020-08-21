import Component from './component';

class Header extends Component {
  constructor(parent, props) {
    super(parent);
    super.render();
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'chat-bot-header';
  }
}

export default Header;
