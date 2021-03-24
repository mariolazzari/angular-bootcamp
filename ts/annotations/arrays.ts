const carMakers = ["Ferrari", "Toyota", "Porsche"];
//const carMakers: string[] = [];

const dates = [new Date(), new Date()];

const carsByMakers = [["F40"], ["Yaris"], ["911"]];
//const carsByMakers: string[][];

const car1 = carMakers[0];
const myCar = carMakers.pop();
// error
// carMakers.push(100)

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push("1975-03-28");
//importantDates.push(100)
