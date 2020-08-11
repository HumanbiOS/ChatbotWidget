import Component from './component';
import Chat from './chat';
import Toggle from './toggle';
import { numberToPixel } from './services/helper';

class Container extends Component {
  constructor(parent, props) {
    super(parent);
    this.props = props;
    this.style = {
      position: 'fixed',
      right: 0,
      bottom: 0,
      mediaQuery: {
        query:
          '(max-width: 700px), (max-height: ' +
          numberToPixel(this.props.height + this.props.bottom) +
          ')',
        style: {
          left: 0,
          top: 0,
          position: 'fixed',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          padding: '20px 20px 80px 20px',
        },
      },
    };

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
    this.element.id = 'container';
  }
}

export default Container;
