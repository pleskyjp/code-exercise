const Warehouse = require('./warehouse');
const Car = require('./car');

class CarFactory {
  constructor(energy) {
    this._energy = energy;
    this._energyCost = 2;
    this._warehouse = Warehouse;
  }
  getWarehouse() {
    return this._warehouse;
  }
  produceCar(color = 'red', wheels = 4, engine = false) {
    if (this._energy - this._energyCost > -1) {
      this._energy -= 2;

      const car = new Car(color, wheels, engine);

      this._warehouse.createdCars.push(car);
      return car;
    } else {
      return null;
    }
  }

  addEnergyPower = (value = 0) => {
    this._energy += value;
  };

  changeCarColor = (car, newColor = 'blue') => {
    if (this._energy - 1 > -1) {
      this._energy -= 1;
      car.setColor(newColor);
    } else {
      return null;
    }
  };
}

module.exports = CarFactory;
