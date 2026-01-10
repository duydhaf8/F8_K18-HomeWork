// part 1
console.log("Part 1");
function classifyTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    } else if (a === b && b === c) {
        return "Equilateral triangle";
    } else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b
    ) {
        return "Right triangle";
    } else if (a === b || a === c || b === c) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}
console.log(classifyTriangle(3, 4, 5));
console.log(classifyTriangle(2, 2, 3));
console.log(classifyTriangle(3, 3, 3));
console.log(classifyTriangle(1, 2, 3));


// part 2
console.log("Part 2");
function isPerfectSquare(a) {
    if (a < 0) {
        return false;
    } else if (Number.isInteger(a ** 0.5)) {
        return true;
    } else {
        return false;
    }
}
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(10));
console.log(isPerfectSquare(-4));
