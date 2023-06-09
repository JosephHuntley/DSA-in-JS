// O(n) - Linear
// More Optimal than recursive
const fibonacci = (n) => {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++){
        sequence.push(sequence[i-2] + sequence[i-1])
    }

    return sequence
}

// console.log(fibonacci(7)) // [0, 1, 1, 2, 3, 5, 8]

// O(2^n)
const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n
    }
   return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

// console.log(fibonacciRecursive(6))

// O(n) - linear
const factorial = (n) => {
    let total = 1

    for (let i = n; i > 0; i--){
        total *= i;
    }

    return total;
}

// console.log(factorial(0));

// O(n) - Linear
const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1);
}


console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))


// O(sqrt(n)) 
const isPrime = (n) => {
    if (n < 2) { return false; }

    for (let i = 2; i < Math.sqrt(n); i++){
        if (n % i === 0) {

            return false;
        }
    }

    return true
}

// console.log(isPrime(67280421310721))

// O(logn) - Logarithmic
const isPowerOfTwo = (n) => {
    if (n < 1) { return false }
    
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2;
    }

    return true
}

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(4)); // true
// console.log(isPowerOfTwo(8)); // true
// console.log(isPowerOfTwo(9)); // false
// console.log(isPowerOfTwo(5)); // false

// O(1) - Constant
const isPowerOfTwoBitwise = (n) => {
    if (n < 1) return false
    
    return (n & (n-1)) === 0
}
