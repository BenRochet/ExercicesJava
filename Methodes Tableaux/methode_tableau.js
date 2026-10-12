const fruits = ["Pomme","Peche","Poire","Ananas"];

console.log(fruits.includes("Ananas"));
console.log(fruits.indexOf("Peche"));
console.log(fruits.indexOf("Poire"));

console.log(fruits.join());
console.log(fruits.join("-"));
console.log(fruits.join(""));

console.log("Kiwi,Peche,Pomme".split(","));
console.log("GRETA".split(""))

const ingredients=" Oeuf' lait' ble".split("'");

console.log(ingredients.includes(" Oeuf"));
console.log(ingredients.join("-"));

const prenom = ["Camille","Sofia","Malik","Nour"];

console.log(prenom.includes("Camille"));
console.log(prenom.indexOf("Malik"));


const nom ="Camille,Sofia,Malik,Nour,Bob".split(",")
console.log(prenom.includes("Bob"));
console.log(nom.includes("Bob"));

console.log(prenom.join(" ,"));

console.log("G_R_E_T_A".split("_").join(""));

prenomSlice1=prenom.slice(1,3);
prenomSlice2=prenom.slice(1,2);


console.log(prenom);
console.log(prenomSlice1);
console.log(prenomSlice2);


prenomSplice1=prenom.splice(1,3);
console.log("1");
console.log(prenom);
console.log(prenomSplice1);
prenomSplice2=prenom.splice(0,1);
console.log("2");
console.log(prenom);
console.log(prenomSplice2);

console.log("flag 1");

const weddingGuests = ["Camille", "Sofia", "Malik", "Nour", "Bob", "Léa"];

const honorTable = weddingGuests.slice(0,3);
console.log(weddingGuests);
console.log(honorTable);

const indexMalik = weddingGuests.indexOf("Malik");

console.log("Flag 2")
const weddingTable = weddingGuests.splice(indexMalik,1)
console.log(weddingTable);
console.log(weddingGuests);

const indexNour = weddingGuests.indexOf("Nour");
weddingTable.push(weddingGuests.splice(indexNour,1).join("")) 

console.log(weddingTable);

console.log("sort");

const numbers = [1, 20, 45, 2, 3, 5, 8];
numbers.sort((a,b)=> a - b);
console.log(numbers);

console.log("flga 3");

const grades = [12, 5, 20, 8, 15];

grades.sort((a,b)=>b-a);

console.log(grades);


const result = [12, 5, 20, 8, 15];

const honor = [12, 5, 20, 8, 15].sort((a,b)=>a-b).slice(0,3);

console.log(honor);


const step2 = ["a", "b", "c", "d", "e", "f", "g"];
const step3 = step2.slice();
step3.splice(4, 2, "t","t");
console.log(step3);