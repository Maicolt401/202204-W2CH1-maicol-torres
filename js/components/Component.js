class Component {
  element;

  constructor(parentElement, tag, className) {
    this.element = document.createElement(tag);
    this.element.classname = className;

    parentElement.append(this.element);
  }
}
export default Component;
