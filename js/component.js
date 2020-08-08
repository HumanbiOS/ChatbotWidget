import { aplyStylesToElement } from './services/helper';
class Component {
  parent;
  element;
  children = [];
  style = {};

  constructor(parent) {
    this.parent = parent;
  }

  render() {
    this.create();
    this.applyStyle();
    this.append();
    this.addChildren();
  }

  create() {
    throw new Error('Create not implemented');
  }

  append() {
    this.parent.appendChild(this.element);
  }

  remove() {
    parent.removeChild(this.element);
  }

  update() {
    this.remove();
    this.render();
  }

  //TODO move this
  addChildren() {}

  applyStyle() {
    aplyStylesToElement(this.style, this.element);
  }
}

export default Component;
