interface Drivable {
  year: number;
  drive(): string;
}

export class Car implements Drivable {
  year = 2000;

  drive() {
    return "I am driving.";
  }
}
