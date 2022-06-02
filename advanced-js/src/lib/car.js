class Car {
  constructor(color, wheels, engine) {
    this._color = color;
    this._wheels = wheels;
    this._engine = engine;
  }

  getColor() {
    return this._color;
  }
  setColor(value) {
    this._color = value;
  }

  getWheels() {
    return this._wheels;
  }
  setWheels(value) {
    this._wheels = value;
  }

  getEngine() {
    return this._engine;
  }
  setEngine(value) {
    this._engine = value;
  }
}

module.exports = Car;
