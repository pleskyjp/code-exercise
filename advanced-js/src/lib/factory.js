const Warehouse = require('./warehouse');
const Car = require('./car');

class CarFactory {
  constructor(energy) {
    this.energy = energy;
    this.energyCost = 2;
    this.warehouse = Warehouse;
  }
  getWarehouse() {
    return Warehouse;
  }
  produceCar(color = 'red', wheels = 4, engine = false) {
    if (this.energy - this.energyCost > -1) {
      this.energy -= 2;

      const car = new Car(color, wheels, engine);

      this.warehouse.createdCars.push(car);
      return car;
    } else {
      return null;
    }
  }

  addEnergyPower = (value = 0) => {
    this.energy += value;
  };

  changeCarColor = (car, newColor = 'blue') => {
    if (this.energy - 1 > -1) {
      this.energy -= 1;
      car.color = newColor;
    } else {
      return null;
    }
  };
}

module.exports = CarFactory;
