/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/
function isPalindrome(mot){
    if (mot===undefined){
        return false;
    }
    let i=0;
    let j=mot.length-1;
    while(i<j){
        if(mot[i]!==mot[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof isPalindrome, "function");
assert.strictEqual(isPalindrome.length, 1);

// TODO add your tests here
assert.strictEqual(isPalindrome(),false)
assert.strictEqual(isPalindrome("BOB"),true);
assert.strictEqual(isPalindrome("BABAR"),false);
// End of tests

console.log("🎉");
