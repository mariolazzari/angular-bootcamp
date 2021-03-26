interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date(2000, 3, 28),
  broken: false,

  summary(): string {
    return this.name;
  },
};

const myDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,

  summary(): string {
    return `My drink has ${this.sugars} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log("Summary:", item.summary());
};

printSummary(oldCivic);
printSummary(myDrink);
