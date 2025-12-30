// Part 1
// 1
console.log("Part 1");
console.log(1);
let name = "Duy";
let age = 20;
let isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 2
console.log(2);
let a = 5;
let b = 10;
a = 50;
b = 100;
console.log("a:", a, "b:", b);

// Part 2
// 1
// const is a constant, a variable that cannot be changed, let can have its value changed.
// Use const when initializing constants or values that do not change, such as Pi, date of birth, etc.
// 2
// Incorrect because variable x is const, so its value cannot be changed.

// Part 3
// 100: number
// 100: number
// TRUE: boolean
//     [1, 2, 3]: object
// { name: "An", age: 20 }: object
// null: object
// undefined: undefined
console.log("Part 3");
let student = {
    name: "Duy",
    age: 20,
    scores: [8, 9, 8]
};
console.log(student);

// Part 4
console.log("Part 4");
let number = 1000;
let string = "1000";
let boolean = true;
number = String(number);
string = Number(string);
boolean = String(boolean);
console.log(number, string, boolean);
console.log(typeof number, typeof string, typeof boolean);

// Part 5
// Boolean(0): false
// Boolean(1): true
// Boolean(""): false
// Boolean("hello"): true
// Boolean(null): false
// Boolean([]): true

// Part 6
console.log("Part 6");
const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0]);
console.log(numbers[4]);
// When assigning a = numbers, both a and numbers refer to the same memory location, so they are related.
