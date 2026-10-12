/*prompt*/
const prompt = require("prompt-sync")();

const userName = prompt("saisir ton nom");
console.log(userName);

const userAge = prompt("saisir ton age");
console.log(typeof userAge);

const ageNumber = parseInt(userAge);
console.log(typeof ageNumber);

/*boucle if*/
const age = ageNumber;

if (age < 3) {
  console.log("Hello, Baby 🍼!");
} else if (age < 18) {
  console.log("Hi! 👋");
} else if (age < 100) {
  console.log("Greetings 🖖");
} else {
  console.log("Wow... 😲");
}

/*Demande mdp puis vérifie*/

const secret="P@ssword";
const mdp = prompt("entrer mot de passe :");

if (mdp===secret){
    console.log("Welcome");
}
else {
    console.log("mot de passe incorrect")
}

if (1) { console.log("A"); }/* A */
if (0) { console.log("B"); }/* RAS */
if ("tacos") { console.log("C"); }/* C*/
if ("") { console.log("D"); }/* RAS */
if ([]) { console.log("E"); }/* E */
if ({}) { console.log("F"); }/* F */

/*test valeurs falsy*/
if(false){console.log("falsy")}
if(0){console.log("falsy")}
if(-0){console.log("falsy")}
if(null){console.log("falsy")}
if(""){console.log("falsy")}
if(undefined){console.log("falsy")}

if([]){console.log("thruly")}
if({}){console.log("thruly")}
if("0"){console.log("thruly")}
if(-1){console.log("thruly")}

const name = "Bob";
// La version longue
if (name === "Bob") {
  console.log("Hello, Bob");
} else {
  console.log("Go away!");
}
name === "Bab" ? console.log("Hello"): console.log("byebye");


const animalName = "Lucky";
if (animalName === "Lucky") {
  console.log("Welcome Lucky!");
} else {
  console.log("Wrong Cat detected!");
}

animalName==="Lucy" ? console.log("Lucky") : console.log("not Lucky");