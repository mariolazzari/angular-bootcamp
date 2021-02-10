const add = (a: number, b: number): number => {
  return a + b;
};

const minus = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const mult = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "Sunny",
};

/*
const logWeather = (forecast: { date: Date; weather: String }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
*/

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
