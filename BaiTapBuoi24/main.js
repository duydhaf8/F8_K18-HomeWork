// Part 1
console.log("Part 1");

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(14));
console.log(isPrime(2));

// Part 2
console.log("Part 2");

function isPerfectNumber(n) {
    if (n <= 1) return false;

    let sum = 1;
    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    return sum === n;
}


console.log(isPerfectNumber(6));
console.log(isPerfectNumber(12));