/*function fibonacci(n) {
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
function fiberSerial(n){
    let fiber = [0,1];
    while(fiber.length < n ){
        fiber.push(fiber[fiber.length - 1] + [fiber.length - 2])
    }
    return fiber;
}
let number = 7;
let result = fiberSerial(number);
console.log(result); */


function serialFiber(n){
    let serial = [0, 1];
    while(serial.length < n){
        serial.push(serial[serial.length - 1] + [serial.length - 2])
    }
    return serial;
}
let numb = 10;
let res = serialFiber(numb);
console.log(res);

function fiberSeria(n){
    let number = [0,1]
    while(number.length < n){
        fiberSeria.push([fiberSeria.length -1] + [fiberSeria.length - 2]);
    }

}



