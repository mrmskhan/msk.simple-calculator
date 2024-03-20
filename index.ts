#!/usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massege: "enter first number", type: "number", name: "firstnumber" },
  { massege: "enter second number", type: "number", name: "secondnumber" },
  {
    massege: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
// cinditional statement
if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
}

console.log("The End")
