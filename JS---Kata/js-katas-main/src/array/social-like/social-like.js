/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here
function getLikes(tableau){
    if (tableau.length===0){
        return "Be the first to like this";
    }
    else{
        if(tableau.length>=3){
            const nom = tableau.slice(0,1);
            return `${nom} and ${tableau.length-1} other people like this`;
        }
        else if(tableau.length==2){
            const nom1 = tableau.slice(0,1);
            const nom2 = tableau.slice(1,2);
            return `${nom1} and ${nom2} like this`;
        }
        else{
            const nom = tableau.slice(0,1);
            return `${nom} like this`;
        }
    }
}
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof getLikes, "function");
assert.strictEqual(getLikes.length, 1);
assert.strictEqual(getLikes([]), "Be the first to like this");
assert.strictEqual(getLikes(["Cartman"]), "Cartman like this");
assert.strictEqual(getLikes(["Bart"]), "Bart like this");
assert.strictEqual(getLikes(["Kenny", "Cartman"]), "Kenny and Cartman like this");
assert.strictEqual(getLikes(["Bart", "Lisa"]), "Bart and Lisa like this");
assert.strictEqual(getLikes(["Stan", "Kyle", "Kenny", "Cartman"]), "Stan and 3 other people like this");
assert.strictEqual(getLikes(["Homer", "Marge", "Bart", "Lisa", "Maggie"]), "Homer and 4 other people like this");
// End of tests

console.log("🎉");
