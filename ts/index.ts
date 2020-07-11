// types
const myName: string = "Mario";
const anyType: any = undefined;
const ten: number = 10;
const yes: boolean = true;
const nothing: null = null;
const undef: undefined = undefined;

// type inference
const name2 = "Mario";
// name = 10; -> error
const sentence = "Mario is fine.";
//sentence.includes("is");

// functions
const addNumbers = (a: number, b: number): number => a + b;
const joinStrings = (a: string, b: string): string => a + b;

// interfaces
interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}
// object
const post: Post = { title: "Post one", daysOld: 1, published: true };
// method
const printPost = (post: Post) => `${post.title} (${post.daysOld})`;

// Class
class Car {
  color: string;
  year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    console.log("Vrooooom");
  }
}

const car = new Car("red", 2020);
car.drive();
console.log(car);
