class Component {
  parent;
  element;
  children = [];
  style;

  constructor(parent) {
    this.parent = parent;
  }

  render() {
    this.create();
    this.applyStyle();
    this.append();
    this.children = this.addChildren();
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
  addChildren(children) {
    return [];
  }

  applyStyle() {
    for (const [key, value] of Object.entries(this.style)) {
      this.element.style[key] = value;
    }
  }
}

export default Component;
