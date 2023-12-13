function setHour(hour, format = '12hrs'){
    if(format === '12hrs'){
        return hour % 12 !== 0 ? hour % 12 : 12;
    } else if ( format === '24hrs'){
        return hour;
    }
}

let time = ('2:00');
let resTwelve = setHour(time, '12hrs');
let resTwentyFour = setHour(time, '24hrs');
console.log(resTwelve);
console.log(resTwentyFour);

// Function to change the hour format
function changeHourFormat(hour, format = '12hr') {
    // Check the specified format and adjust the hour accordingly
    if (format === '12hr') {
        return hour % 12 !== 0 ? hour % 12 : 12;
    } else if (format === '24hr') {
        return hour;
    }
}

// Example usage
// Prompt the user to enter the hour
let times = ('23:00 hrs');
// Change the hour format to 12-hour and 24-hour
let result12hr = changeHourFormat(times, '12hr');
let result24hr = changeHourFormat(times, '24hr');
// Display the results
console.log(`12-hour format: ${result12hr}`);
console.log(`24-hour format: ${result24hr}`);

//factoria
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Example usage
let number = prompt("Enter a number to calculate factorial: ");
console.log(factorial(number));
//leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
let year = prompt("Enter a year to check for leap year: ");
console.log(isLeapYear(year));
//srting array
function sortAndAdd(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage
let numbers = [5, 2, 8, 1, 3];
let resultSum = sortAndAdd(numbers);
console.log(resultSum);
//lonely integer
function lonelyInteger(arr) {
    return arr.reduce((acc, curr) => acc ^ curr, 0);
}

// Example usage
let myNumbers = [1, 2, 3, 4, 3, 2, 1];
let lonely = lonelyInteger(myNumbers);
console.log(lonely);

