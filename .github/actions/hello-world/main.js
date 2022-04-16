const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const fourthGreeting = core.getInput("fourth-greeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
  console.log(`Hello ${thirdGreeting}`);
}
console.log(`Hello ${fourthGreeting}`);
