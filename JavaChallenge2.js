let markMass = 78; // in kg
let markHeight = 1.69; // in meters

let johnMass = 92; // in kg
let johnHeight = 1.95; // in meters

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}


if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

let age = prompt("Please enter your age:");

if (age >= 18) {
  console.log("You are old enough to vote!");
} else {
  console.log("Sorry, you are not old enough to vote yet.");
}

let grade = prompt("Please enter your grade (A, B, C, D, or F):");

if (grade === "A") {
  console.log("Great job!");
} else if (grade === "B") {
  console.log("Good work!");
} else if (grade === "C") {
  console.log("You can do better.");
} else if (grade === "D") {
  console.log("Needs improvement.");
} else if (grade === "F") {
  console.log("You failed.");
} else {
  console.log("Invalid grade entered.");
}

letage= prompt("Please enter your age:");

if (age >= 0 && age <= 2) {
  console.log("You are a baby.");
} else if (age >= 3 && age <= 5) {
  console.log("You are a toddler.");
} else if (age >= 6 && age <= 12) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 18) {
  console.log("You are a teenager.");
} else if (age >= 19) {
  console.log("You are an adult.");
} else {
  console.log("Invalid age entered.");
}

let num = prompt("Please enter a number:");

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


