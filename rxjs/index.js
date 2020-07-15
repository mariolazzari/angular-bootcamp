const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  let text = parseInt(e.target.value);
  if (isNaN(text)) {
    throw new Error("You must enter a number.");
  }
  logValue(text);
});

const logValue = (value) => {
  console.log(`Your number is ${value}.`);
};
