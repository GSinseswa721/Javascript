function myPrime(num){
    if (num < 2) return false;
    for (let i=2 ; i <= Math.sqrt(num); i++ ){
        if (num % i === 0) return false;
    } 
    return true;
}

//let number = 22
console.log(myPrime(2341));

function isPrime(num){
    if(num < 2 ) return false;
    for (let i= 2 ; i <= Math.sqrt(num); i++){
        if (num % i === 0)return false;}
        return true;
}
console.log(isPrime(4));

function itPrime(num){
    if (num < 2) return false;
    for (let i=2; i<=Math.sqrt(num); i ++){
        if (num % i === 0) return false;}
        return true ;   
}
console.log(itPrime(90));

function primeIs(num){
    if( num < 2) return false;
    for(let i=2; i <=Math.sqrt; i++);{
        if(num % i === 0) return false;
    } return true;
}
console.log(itPrime(3))
function makePrime(n){
    if(n < 2)
        return false
    
    for( i = 2; i <= Math.sqrt; i ++){
        if (n % i === 0)
            return false;
        } return true;
    }


console.log(makePrime(7));
_
function primeNumber(num){
    if(num < 2) return false;
    for(i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    } return true;
}
console.log(primeNumber(20));