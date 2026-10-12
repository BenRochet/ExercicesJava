billyTheCat = {
    name : "Billy",
    color : "roux",
    favouriteFoods : ["thon","croquettes"],
    isHungry : true,
    meow : function () {
        return "Miaaaou";
    },
    feed : function () {
        if (this.isHungry){
            console.log("Billy mange");
            this.isHungry=false;
        }
        else{
            console.log("Billy est rassasié")
        }
    },
};
 function bestFoods (objet){
    console.log(objet.favouriteFoods[1]);
    console.log(objet.meow());
 }

 bestFoods(billyTheCat);

 const choice = "color";

 console.log(billyTheCat[choice]);

 billyTheCat.colr="Noir";
 console.log(billyTheCat);

 const fruits = [
  { name: "Apple", color: "green" },
  { name: "Pineapple", color: "yellow" },
  { name: "Cherry", color: "red" },
];
console.log(fruits[1].name);
console.log(fruits.name);

const animals = [
    {name : "Billy", species : "Chat", sound : "Miaou"},
    {name : "Rex", species : "Chien", sound : "Wouf"},
    {name : "Coco", species : "Perroquet", sound : "Coco"},
];

console.log(animals);
console.log(animals.length);
console.log(animals[1].length);

function soundAnimals (objetAnimals){
   for (let i=0;i<objetAnimals.length;i++){
        console.log(`${objetAnimals[i].name} dit ${objetAnimals[i].sound}`);
   }
   return 1;
}

soundAnimals(animals);

const apple = {
  color: "green",
  diameter: 10,
  isEaten: false,
  eat : function () {
    if (this.isEaten){
        console.log("La pomme à été mangé");
    }
    else{
        console.log("Croque la Pomme!");
        this.isEaten=true;
    }
  }
};

apple.eat();
apple.eat();


console.log({ name: "Billy" } === { name: "Billy" });
const a = { name: "Billy" };
const b = a;
console.log(a===b);
b.name = "Bob";
console.log(a.name);

billyTheCat.feed();
billyTheCat.feed();
