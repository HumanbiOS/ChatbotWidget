import Component from './component';
import Chat from './chat';
import Toggle from './toggle';

class Container extends Component {
  constructor(parent, props) {
    super(parent);
    this.props = props;
    //this.active = false;

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
        callback: () => {
          chat.toggle();
          this.toggle();
        },
      }),
    ];
  }

  create() {
    this.element = document.createElement('div');
    //this.element.className = 'chat-bot-container';
  }

  toggle() {
    this.element.classList.toggle('chat-bot-container');
  }
}

export default Container;
