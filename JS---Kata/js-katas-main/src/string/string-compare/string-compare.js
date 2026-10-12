/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/
function compare(string1,string2){
  if(string1===undefined || string2===undefined){
    return -1;
  }
  if (string1===null || string2===null || string1.length!==string2.length){
    return -1;
  }
  let compteur=0;
  for (let i=0;i<string1.length;i++){
    if(string1[i]===string2[i]){
      compteur++;
    }
  }
  return compteur;
}
// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof compare, "function");
assert.strictEqual(compare.length, 2);

// TODO add your tests here
assert.strictEqual(compare(),-1);
assert.strictEqual(compare(null),-1);
assert.strictEqual(compare("a","a"),1);
assert.strictEqual(compare("a","b"),0);
assert.strictEqual(compare("cassis","castor"),3);
assert.strictEqual(compare("tacos","poulpe"),-1);
// End of tests

console.log("🎉");
