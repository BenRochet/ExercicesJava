/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/
function inverse(tableau){
    const result=[];
    if (tableau===null || tableau.length===0){
        return result;
    }
    else if (!tableau.every(el => typeof el === "number") || Array.isArray(tableau)===false){
        console.log("Le tableau ne doit contenir que des nombres");
        return [1];
    }
    else{
        for(let i=0;i<tableau.length;i++){
            eltTableau=tableau.slice(i,i+1)
            result.push(eltTableau.join(""));
            result[i]=-1*result[i];
        }
        return result;
    }
}
// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof inverse, "function");
assert.strictEqual(inverse.length, 1);
assert.deepStrictEqual(inverse([]), []);
assert.deepStrictEqual(inverse(null), []);
assert.deepStrictEqual(inverse([1]), [-1]);
assert.deepStrictEqual(inverse([-1]), [1]);
assert.deepStrictEqual(inverse([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
assert.deepStrictEqual(inverse([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
assert.deepStrictEqual("arg", [1]);
// End of tests

console.log("🎉");
