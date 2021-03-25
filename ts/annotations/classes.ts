class Vehicle {
  drive(): void {
    console.log("drive");
  }

  honk(): void {
    console.log("honk");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
