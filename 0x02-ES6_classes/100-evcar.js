import Car from './10-car';

/* eslint-disable class-methods-use-this */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car();
  }
}
