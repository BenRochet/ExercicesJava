/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
function abbreviate(civilite){
    if (civilite.length===0){
        return "";
    }
    const tabString = civilite.split(" ");
    if(tabString.length==1){return "Manque nom ou prenom"}
    const prenom=tabString[0].split("");
    const nom=tabString[1].split("");
    return `${prenom[0]}.${nom[0]}`;
}

console.log(abbreviate("Benjamin Rochet"));

console.log(abbreviate([]))
// Begin of tests
const assert = require("assert");
const { table } = require("console");

assert.strictEqual(typeof abbreviate, "function");
assert.strictEqual(abbreviate.length, 1);

// TODO add your tests here

assert.strictEqual(abbreviate(""), "");
assert.strictEqual(abbreviate("Benjamin Rochet"), "B.R");
assert.strictEqual(abbreviate("Benjamin"), "Manque nom ou prenom");
assert.strictEqual(abbreviate("Rochet"), "Manque nom ou prenom");
// End of tests

console.log("🎉");
