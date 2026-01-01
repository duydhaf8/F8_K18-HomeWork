// Part 1
console.log("Part 1");
const classA = ["An", "Binh", "Chi"];
const classB = classA;
classB[0] = "An updated";
console.log(classA);
// The name "An" in classA changed even though you only modified classB because they refer to the same Memory Address.

// Part 2
console.log("Part 2");
let x = "10";
let y = 2;
console.log(x + y);      // Result 1
console.log(x - y);      // Result 2
console.log(x * "3");    // Result 3
console.log("Hello" - y);// Result 4
// 1. Explain why the addition (+) results in "102" while the subtraction (-) results in 8.
// The addition (+) results in "102" because when adding number + string, the number is converted to string.
// The subtraction (-) results in 8 because when subtracting string - number, the string is converted to number.
// 2. What does the result NaN in the last calculation mean? Why did it happen?
// NaN stands for Not a Number.
// It means that the value cannot be converted to a number.

// Part 3
console.log("Part 3");
let age = 9;
let mathScore = 10;
let isVip = false;
let canEnter = (age >= 10 && mathScore >= 7) || isVip;
console.log(canEnter);
isVip = true;
canEnter = (age >= 10 && mathScore >= 7) || isVip;
console.log(canEnter);
// Logic Question: Is !(age < 10) mathematically the same as age >= 10?
// ==> Yes

// Part 4
console.log("Part 4");
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);
// because laptop.brand and myLaptop.brand, laptop.spec.ram and mySpec.ram refer to the same Memory Address.


