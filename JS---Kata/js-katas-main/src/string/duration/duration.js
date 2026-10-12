/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/
// TODO add your code here
function convertTime(horaire){
    const minutemax=60;
    if (horaire===undefined){
        return -1;
    }
    const tabhoraire = horaire.split(":");
    if (tabhoraire.length!==2){
        return -1;
    }
    if (Number(tabhoraire[1]>minutemax)){
        return -1;
    }
    return Number(tabhoraire[0])*60+Number(tabhoraire[1]);
}
convertTime("02:23");
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convertTime, "function");
assert.strictEqual(convertTime.length, 1);

// TODO add your tests here
assert.strictEqual(convertTime("02:23"),143);
assert.strictEqual(convertTime("02h23"),-1);
assert.strictEqual(convertTime(),-1);
// End of tests

console.log("🎉");
