/* class Component {
  element;

  constructor(parentElement, tag, className) {
    this.element = document.createElement(tag);
    this.element.classname = className;

    parentElement.append(this.element);
  }
}
export default Component; */

const Personajeishon = class {
  name;

  family;

  age = 0;

  statusLife = "alive";

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.statusLife = "alive";
  }
};

const namePersonajeRey = new Personajeishon("joffrey ", "rey", 37);

export default namePersonajeRey;
