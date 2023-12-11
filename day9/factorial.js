function factorial(n){
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(34));

function factorialNumber(n){
    return n === 0 ? 1 : n * factorialNumber(n - 1);
}
console.log(factorialNumber(90));