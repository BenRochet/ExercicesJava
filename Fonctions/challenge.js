function changeMessage(nom,nbTacos,prixUnitaire,totalPaye){
    const rendu = totalPaye - (nbTacos*prixUnitaire);
    if(rendu >=0){
        return `${nom} paie ${totalPaye} € pour ${nbTacos} tacos à ${prixUnitaire} €, on lui rend ${rendu} €`
    }
    else{
        return `${nom} paie ${totalPaye} € pour ${nbTacos} tacos à ${prixUnitaire} €, il lui manque ${(-1*rendu)} €`
    }
}

console.log(changeMessage("Camille", 3, 8, 25));
// Camille paie 25 € pour 3 tacos à 8 €, on lui rend 1 €.
console.log(changeMessage("Malik", 2, 8, 20));
// Malik paie 20 € pour 2 tacos à 8 €, on lui rend 4 €.
console.log(changeMessage("Sofia", 2, 8, 10));
// Sofia paie 10 € pour 2 tacos à 8 €, il manque 6 €.