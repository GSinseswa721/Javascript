// Example array
let myArray = [1, 2, 3, 4, 5];

// Example built-in functions
let length = myArray.length;
let maximum = Math.max(...myArray);
let minimum = Math.min(...myArray);
let sumOfElements = myArray.reduce((acc, curr) => acc + curr, 0);

function fibonacci(n) {
    let fibSeries = [0, 1];
    while (fibSeries.length < n) {
        fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
    }
    return fibSeries;
}

// Example usage
let numTerms = prompt("Enter the number of terms for Fibonacci series: ");
let result = fibonacci(numTerms);
console.log(result);
function sortArray(arr, order = 'asc') {
    return order === 'asc' ? arr.slice().sort((a, b) => a - b) : arr.slice().sort((a, b) => b - a);
}

// Example usage
let myArray = [4, 2, 8, 1, 6];
let sortedArrayAsc = sortArray(myArray);
let sortedArrayDesc = sortArray(myArray, 'desc');
console.log(sortedArrayAsc);
console.log(sortedArrayDesc);
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example usage
let word = prompt("Enter a word to check palindrome: ");
console.log(isPalindrome(word));

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage
let number = prompt("Enter a number to check for prime: ");
console.log(isPrime(number));
/*Prime Numbers Below a Given Number:*/
function primesBelowN(n) {
    return Array.from({ length: n - 2 }, (_, i) => i + 2).filter(isPrime);
}

// Example usage
let limit = prompt("Enter a number to find prime numbers below: ");
console.log(primesBelowN(limit));
