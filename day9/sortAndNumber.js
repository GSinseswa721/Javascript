/*
- Slice method that returns selected elements of array as a new array.
    It is a method of array that instance returns a shallow copy of a portion of an array into a new array
    object selected from start to end. 
*/

// Calculator program in a loop
function sortAndadd(arr){
  let sortArr = arr.slice().sort((a, b) => a - b);
  return sortArr.reduce((acc, curr) => acc  + curr , 0);
}
 
let number = [2,4,1,8,9,5];
let result = sortAndadd(number);
console.log(result);

function sortNumber(arr){
  let myarr = arr.slice().sort((a,b) => a - b);//sorting
  return myarr.reduce((acc, curr) => acc + curr, 0); //sum of sorted array
}

const myNumber = [2,90,48,29];
const theResult = sortNumber(myNumber);
console.log(theResult);

function sortinArray(arr){
  let sortArrayFun = arr.slice((a,b) => a - b);
  return sortArrayFun.reduce((acc, curr)=> acc + curr, 0);
}

const gigi = [39,9,39,9,2];
const gigiFunct = sortinArray(gigi)
console.log(gigiFunct)
function bootle(arr){
  let irakoze = arr.slice((a,b) => a - b);// sorting
  return irakoze.reduce((acc, curr) => acc + curr, 0);
}
let myNber = [2,90,3,56,98];
let resuts = sortinArray(myNber);
console.log(resuts)