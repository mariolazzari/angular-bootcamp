class Vehicle {
  //color: string = "red";

  constructor(public color: string) {
    //this.color = color;
  }

  protected honk(): void {
    console.log("honk");
  }
}

const vehicle = new Vehicle("orange");
//vehicle.drive();
//vehicle.honk();

class Car extends Vehicle {
  constructor(color: string, public wheel: number) {
    super(color);
  }

  private drive(): void {
    console.log("Car drive");
  }

  public startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car3 = new Car("green", 4);
car.startDriving();
