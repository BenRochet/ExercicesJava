/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO add your code here
function countChar(string,char){
    if(string===undefined || char===undefined){
        return -1;
    }
    else if (string==="" || string ===null || char==="" || char === null)
    /*else if(string===null || char===null)*/{
        return -1;
    }
    else if (char.length>=2){
        return -1;
    }
    else {
        let count=0;
        for(let i=0;i<string.length;i++){
            if(string[i]===char){
                count++;
            }
        }
        return count;
    }
}

console.log("");
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof countChar, "function");
assert.strictEqual(countChar.length, 2);
// TODO add your tests here
assert.strictEqual(countChar(),-1);
assert.strictEqual(countChar("","z"),-1);
assert.strictEqual(countChar(null,"z"),-1);
assert.strictEqual(countChar("z",null),-1);
assert.strictEqual(countChar("bababa","a"),3);
assert.strictEqual(countChar("bbbbba","ba"),-1);
// End of tests

console.log("🎉");
