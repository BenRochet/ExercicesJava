/*
J'ai 17 bonbons à partager en 5
Afficher le modulo
Modulo à comparé par "2" avec strict ou souple
commentaire du point ci-dessus.
*/

let bonbons=17;
let individus=5;
let nombre=(17/5)|0;
let reste=17%5;
console.log("nombre = " + nombre);
console.log("reste = " + reste);
let test1=(reste=="2");
console.log("reste == '2' :" + test1 );
let test2=(reste==="2");
console.log("reste === '2' :" + test2 );