interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: "Civic",
  year: new Date(2000, 3, 28),
  broken: false,

  summary(): string {
    return this.name;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log("Name:", vehicle.summary());
};
