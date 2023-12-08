/*
XOR or exclusive OR is a logical operation that outputs true only when the number of true inputs is odd.
Reduce function is used to JS method which is used to reduce array to single value
and executes a provided function for each value fo the array.
Callback function is a function that is passed as an argument or to another function. 
Acc is not key word but it 
*/
function lonelInteger(arr){
    return arr.reduce((acc, curr) => acc ^ curr, 0);
}
const myArray = [12,3,44,22,12,3,22];
const lonely = lonelInteger(myArray);
console.log(lonely);