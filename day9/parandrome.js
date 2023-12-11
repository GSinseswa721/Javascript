function parandrome(a){
    return a ===a.split('').reverse().join('');
}

console.log(parandrome("I am so blessed"));
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example usage
let word = "home emoh";
console.log(isPalindrome(word));
