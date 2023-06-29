export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(val) {
    this._brand = val;
  }

  get color() {
    return this._color;
  }

  set color(val) {
    this._color = val;
  }

  get motor() {
    return this._motor;
  }

  set motor(val) {
    this._motor = val;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const { constructor } = Reflect.getPrototypeOf(this);
    return Reflect.construct(constructor, []);
  }
}
