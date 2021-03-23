const profile = {
  name: "Mario",
  age: 45,
  coords: {
    lat: 0,
    kng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

// destructoring
const { age }: { age: number } = profile;
