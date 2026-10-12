let camilleRoll;
let sofiaRoll;
let malikRoll;

function lancerDe() {
  return Math.floor(Math.random() * 6) + 1;
}

camilleRoll = lancerDe();
sofiaRoll = lancerDe();
malikRoll = lancerDe();

if (camilleRoll===sofiaRoll && camilleRoll===malikRoll){
    console.log("les trois lancers sont identiques égal à = "+ sofiaRoll);    
}
else if(camilleRoll===sofiaRoll || sofiaRoll===malikRoll || malikRoll===camilleRoll){
    console.log("Deux joueurs ont fait le même score");
    console.log("resultat de camille = "+ camilleRoll);
    console.log("resultat de malik = "+ malikRoll);
    console.log("resultat de sofia = "+ sofiaRoll); 
}
else{
    console.log("tous les résultats sont différents");
    console.log("resultat de camille = "+ camilleRoll);
    console.log("resultat de malik = "+ malikRoll);
    console.log("resultat de sofia = "+ sofiaRoll); 
}