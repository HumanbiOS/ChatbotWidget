import { numberToPixel, aplyStylesToElement } from './services/helper';
class Toggle {
  constructor(parent, props) {
    this.active = false;

    this.style = {
      position: 'fixed',
      bottom: numberToPixel(props.bottom),
      right: numberToPixel(props.right),
      width: numberToPixel(props.diameter),
      height: numberToPixel(props.diameter),
      borderRadius: numberToPixel(props.diameter / 2),
      backgroundColor: props.color,
      boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)',
    };

    this.create(parent, props.callback);
  }

  create(parent, toggleCallback) {
    this.element = document.createElement('div');
    aplyStylesToElement(this.style, this.element);
    this.element.onclick = toggleCallback;
    parent.appendChild(this.element);
  }
}

export default Toggle;
