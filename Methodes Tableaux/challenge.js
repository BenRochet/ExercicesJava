const mysteriousString = "iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f";
console.log("step 0 : ", mysteriousString);
// step 1 : découpe-la en tableau, une lettre par élément
const step1 = mysteriousString.split(""); // à compléter
console.log("step 1 : ", step1);
// step 2 : garde de l'index 15 inclus à l'index 31 exclu
const step2 = step1.slice(15,31); // à compléter
console.log("step 2 : ", step2);
// step 3 : à partir de l'index 4, remplace 2 éléments par la seule lettre "t"
const step3 = step2.slice();
step3.splice(4, 2, "t","t");
// à compléter
console.log("step 3 : ", step3);
// step 4 : inverse l'ordre
const step4 = step3.reverse(); // à compléter
console.log("step 4 : ", step4);
// step 5 : recolle tout en une chaîne, sans séparateur
const step5 = step4.join(""); // à compléter
console.log("step 5 : ", step5);