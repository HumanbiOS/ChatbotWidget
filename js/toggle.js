import Component from './component';
import { numberToPixel } from './services/helper';
class Toggle extends Component {
  constructor(parent, props) {
    super(parent);
    this.active = false;
    this.callback = props.callback;

    this.render();
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'chat-bot-toggle';
    this.element.onclick = () => this.callback();
  }
}

export default Toggle;
