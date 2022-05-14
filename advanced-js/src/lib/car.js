class Car {
  constructor(color, wheels, engine) {
    this.color = color;
    this.wheels = wheels;
    this.engine = engine;
  }

  getColor() {
    return this.color;
  }
  setColor(value) {
    this.color = value;
  }

  getWheels() {
    return this.wheels;
  }
  setWheels(value) {
    this.wheels = value;
  }

  getEngine() {
    return this.engine;
  }
  setEngine(value) {
    this.engine = value;
  }
}

module.exports = Car;
