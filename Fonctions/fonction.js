function directionLaPlage(){
    console.log("On prends les planches");
    console.log("On prend la route");
}

directionLaPlage();

function sayHello(prenom = "Benjamin"){
    console.log("Hello "+ prenom+"!");
}

sayHello("Nicolas");
sayHello("Ludovic");
sayHello("Audrey");
sayHello();

function introduce(prenom = "Benjamin", ville ='Blois'){
    console.log(prenom+" vient de "+ville);
}

introduce("Camille","Tours");
introduce("sofia","Lyon");
introduce("malik","Nantes");
introduce();

function isAdult(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}

if(isAdult(20)) {console.log("majeur");}

/* fonction fléché */
const somme = (X,Y) => { return X+Y};
const somme1 = (X,Y) =>  X+Y;

console.log(somme(4,5));
console.log(somme1(4,3));

function introduce1(prenom = "Benjamin", ville ='Blois'){
    console.log(`${prenom} vient de ${ville}`);
}
introduce1("Valerie","Tours");
introduce1();

const prenom = "Benjamin";

console.log(`Mon prenom est ${prenom}`);

function formatFullName(prenom,nom){
    return (nom + " " +prenom);
}

const formatFullName1 = (prenom,nom) => {return(`${nom} ${prenom}`)};
const formatFullName2 = (prenom,nom) => `${nom} ${prenom}`;

console.log(formatFullName("Benjamin","Rochet"));
console.log(formatFullName1("Brice","Depenveiller"));
console.log(formatFullName2("Jan","Boinet"));