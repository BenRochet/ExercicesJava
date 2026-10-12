const fruits = ["Pomme","Poire","Ananas"];

console.log(fruits[1]);

console.log(Array.isArray(fruits));
console.log(Array.isArray("Pomme"));

const pets = ["😺", "🐶", "🐭", "🦊"];

console.log("affichage de tout le tableau pets");
for(let i=0;i<pets.length;i++){
    console.log(pets[i]);
}

console.log("afichage d'un pet sur deux");
for(let i=0;i<pets.length;i+=2){
    console.log(pets[i]);
}

console.log("affichage du dernier élement de pets")
console.log(pets[pets.length-1]);

function affichageTableau(tableau){
    console.log(`debut affichage ${tableau}`)
    for(let i=0;i<tableau.length;i++){
        console.log(tableau[i]);
    } 
    console.log(`fin affichage ${tableau}`)
}


fruits.push("Banana"); /* ajoute la valeur "Banana" à la fin du tableau*/
console.log(fruits);
fruits.unshift("Strawberry");/* ajoute la valeur "Strawberry" au debut du tabeau*/
console.log(fruits);
fruits.pop();/* supprime la valeur en fin de tableau*/
console.log(fruits);
fruits.shift();/*supprime la valeur en début de tableau*/
console.log(fruits);

fruits.push("Kiwi");
fruits.unshift("Peche");
const popValeur = fruits.pop();
const shiftValeur = fruits.shift();

console.log(popValeur);
console.log(shiftValeur);