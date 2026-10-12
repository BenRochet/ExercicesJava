let num = 0;
const numC = 1;

console.log("num = "+num);
console.log("num const = "+numC);

let tabN = [1,3,9,10,13];
let tabStr = ["pomme","poire","kiwi"];
let objet = {model : "Chevrolet", years : 1977, };

console.log("tabn = " + tabN);
console.log("tabstr = " + tabStr);
console.log("objet = " + objet);

let prenomMoi="Benjamin";/*au sein d'une famille la personne peut changer*/
const nomMoi="Rochet";/* Le nom est commun à tout les individus de la famille*/
let dateNaissanceMoi=1981;/*Puisque que l'invidu peut changer alors la date de naissance aussi*/
/* 
let 2fast= "furious";  pas de nommbres au bedut d'un nom de variable
*/

const myName="Benjamin";
/* myName = "aurelien";*/
console.log(myName);

dateNaissanceMoi++;
console.log("date ++? = " + dateNaissanceMoi);
dateNaissanceMoi+=2;
console.log("date +=2? = " + dateNaissanceMoi);
dateNaissanceMoi--;
console.log("date --? = " + dateNaissanceMoi);
dateNaissanceMoi-=2;
console.log("date -=2? = " + dateNaissanceMoi);


let compteurLike =0;
compteurLike++;
console.log(compteurLike);
compteurLike+=10;
console.log(compteurLike);
compteurLike-=3;
console.log(compteurLike);

const nomComplet = prenomMoi + " " + nomMoi;
console.log(nomComplet);
