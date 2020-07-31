class Root {
  constructor(tag) {
    this.tag = tag;

    this.create();
  }

  create() {
    this.element = document.getElementsByClassName(this.tag)[0];
  }
}

export default Root;
