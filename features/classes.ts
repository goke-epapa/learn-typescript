class Vehicle {
  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle();
vehicle.honk();

const car = new Car();
car.startDrivingProcess();
car.honk();
