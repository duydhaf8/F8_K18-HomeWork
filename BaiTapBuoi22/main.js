// Part 1
console.log("Part 1");

function classifyStudent(studentScore) {
    // if (studentScore < 0 || studentScore > 10) {
    //     return "Invalid score";
    // } else if (studentScore >= 9 && studentScore <= 10) {
    //     return "Excellent";
    // } else if (studentScore >= 8) {
    //     return "Very Good";
    // } else if (studentScore >= 6.5) {
    //     return "Good";
    // } else if (studentScore >= 5) {
    //     return "Average";
    // } else {
    //     return "Weak";
    // }
    switch (true) {
        case studentScore < 0 || studentScore > 10:
            return "Invalid score";
        case studentScore >= 9:
            return "Excellent";
        case studentScore >= 8:
            return "Very Good";
        case studentScore >= 6.5:
            return "Good";
        case studentScore >= 5:
            return "Average";
        default:
            return "Weak";
    }
}

console.log(classifyStudent(5));

// Part 2
console.log("Part 2");
function daysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "31 days";
        case 4:
        case 6:
        case 9:
        case 11:
            return "30 days";
        case 2:
            return "28 days";
        default:
            return "Invalid month";
    }
}

console.log(daysInMonth(2));

// Part 3
console.log("Part 3");
let n = 9;
n % 2 === 0 ? console.log("Even") : console.log("Odd");

// Part 4
console.log("Part 4");
let ticketPrice = 100000;
let age = 12;
const finalPrice = age < 13 ? ticketPrice * 0.5  : ticketPrice;
console.log(finalPrice);

// Part 5
console.log("Part 5");
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
console.log(celsiusToFahrenheit(20));

// Part 6
console.log("Part 6");
function calculateElectricityBill(electricity) {
    if (electricity < 0) {
        return "Invalid value";
    } if (electricity <= 50) {
        return electricity * 1678;
    } else if (electricity <= 100) {
        return 50 * 1678 + (electricity - 50) * 1734;
    } else if (electricity <= 200) {
        return (50 * 1678) + (50 * 1734) + (electricity - 100) * 2014;
    } else {
        return (50 * 1678) + (50 * 1734) + (100 * 2014) + (electricity - 200) * 2536;
    }
}

console.log(calculateElectricityBill(142));

