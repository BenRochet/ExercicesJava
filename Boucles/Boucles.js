for(let i=1;i<=10;i++){
    console.log("Nombre "+i);
}

const fruits = ["Pomme","Peche","Banane"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}


const animals = ["😺", "🐶", "🐭", "🦊", "🐻", "🐼"];
console.log("tous les animaux");
for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
}
console.log("un animal sur 2");
for(let i=0;i<animals.length;i+=2){
    console.log(animals[i]);
}

let j = 0;

while(j<5){
    console.log("tour n°" + j);
    j++;
};

j=100;
console.log("j="+j);
do{
    console.log("message afficher en premier");
    j++;
    console.log("j="+j);
}
while(j<5);


j=1;
while(j<=10){
    console.log("Nombre " + j);
    j++;
}