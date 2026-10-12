const foodTruck = {
    addresse : {rue : "Rue Rebrousse Pénil", ville : "Blois", codePostal: "41000"},
    menu : ["Tacos", "Kebab"],
    isOpen : false,
    openTruck : function () {
        if(!this.isOpen){
            console.log(`Tacos locos ouvre. ${this.menu.length} plat au menu`);
            this.isOpen=true
        }
        else{
            console.log(`Le Tacos locos est déjà ouvert`);
        }
    },
    addDish : function (plat){
        this.menu.push(plat);
    },
    closeTruck: function (){
        if(this.isOpen){
            console.log(`Le Tacos locos ferme`);
            this.isOpen=false;
        }
        else{
            console.log(`Le Tacos locos est déjà fermé`)
        }
    },
}

console.log(foodTruck.addresse.ville);
// Tours
foodTruck.openTruck();
// Tacos Loco ouvre, 2 plats au menu !
foodTruck.addDish("burrito");
foodTruck.closeTruck();
console.log(foodTruck.menu);

const backup = foodTruck;
backup.menu.pop();
console.log(foodTruck.menu);