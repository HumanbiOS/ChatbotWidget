import Component from './component';
import Chat from './chat';
import Toggle from './toggle';
import { numberToPixel } from './services/helper';

class Container extends Component {
  constructor(parent, props) {
    super(parent);
    this.props = props;

    super.render();
  }

  addChildren() {
    let chat = new Chat(this.element, {
      bottom: this.props.bottom,
      right: this.props.right + this.props.diameterToggle * 1.5,
      height: this.props.height,
      width: this.props.width,
      backgroundColor: this.props.backgroundColor,
      baseColor: this.props.baseColor,
    });
    this.children = [
      chat,
      new Toggle(this.element, {
        bottom: this.props.bottom,
        right: this.props.right,
        diameter: this.props.diameterToggle,
        color: this.props.baseColor,
        callback: () => chat.toggle(),
      }),
    ];
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'chat-bot-container';
  }
}

export default Container;
