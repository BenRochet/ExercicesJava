const catalogue = [
  { name: "Tacos", price: 8.5, inStock: true },
  { name: "Poke bowl", price: 11, inStock: false },
  { name: "Tiramisu", price: 5, inStock: true },
];

const names = catalogue.map((dish) => dish.name);
console.log(names);
console.log(catalogue);

const available = catalogue.filter((dish) => dish.inStock);
console.log(available);

const inStock2 = catalogue.filter((dish)=> dish.inStock);
const name2 = inStock2.map((dish) => dish.name);

console.log(inStock2);
console.log(name2);

const name1 = catalogue.filter((dish)=>dish.inStock).map((dish)=>dish.name);
console.log(name1);

const prices = catalogue.map((dish)=>dish.price);
console.log(prices);

const menu = [];
for (let i = 0; i<names.length;i++){
    menu.push(`${names[i]} coûte ${prices[i]}€`);
}
console.log(menu);

const absent = catalogue.filter((dish)=>!dish.inStock).map((dish)=>dish.name);
console.log(absent);

const copy = [...catalogue];

copy.pop();
console.log("catalogue");
console.log(catalogue);
console.log("copy");
console.log(copy);

const tacos = catalogue[0];
const promo = { ...tacos, price: 6.5 };
console.log(catalogue[0]);
console.log("tacos");
console.log(tacos);  
console.log("promo");
console.log(promo);  
console.log(tacos.price);   // 8.5   ← intact
console.log(promo.price);   // 6.5
const promo1 = {... catalogue, price:6.5};
console.log(promo1);

//const { name, price } = tacos;
//console.log(`${name} coûte ${price} €`);  

const [first,second, third] = catalogue;
console.log(first);

const [head, ...others]  = catalogue;
console.log(head);
console.log(others);

const tableau = [...catalogue];
tableau.push({name:"Churros", price : 4, inStock : true});
console.log(catalogue);
console.log(tableau);

const tab = tableau.map((item)=> {
    if (item.name === "Tiramisu") {
         return { ...item, price: 4 };
    } else {
        return item;
    }
});
console.log("tab")
console.log(tab);

//const {name, inStock} =  tab[0];

function label({name,price}){
    return `${name} : ${price}€`;
};

const name3 = tab[2].name;
const price2 = tab[2].price;
console.log("N "+name3+" p "+price2);

console.log(label({name : name3,price : price2}));

const labels = tab.map(label);
console.log(labels);



const total = catalogue.reduce((sum, dish) => sum + dish.price, 0);
console.log(total);

const TotalStock = catalogue.filter((dish)=>dish.inStock).reduce((sum,dish)=> sum + dish.price,0);
console.log(TotalStock);

const priceUp = catalogue.reduce((Max,dish)=>(Max>=dish.price ? Max : dish.price),0);
console.log(priceUp)


//const test = [].reduce((sum, dish) => sum + dish.price);
//console.log(test);

//const promoCatalogue = catalogue.map((dish) => {
//  dish.price = dish.price * 0.9;
//  return dish;
//});

const promoCatalogue = catalogue.map((dish) => {
  return { ...dish, price: dish.price * 0.9 };   // un plat neuf
});
console.log(promoCatalogue[0].price);
console.log(catalogue[0].price);

function addDish(list,dish){
    const result = [...list];
    result.push(dish);
    return result;
}

list=[];
dish = {name : "Churros", price : 4, inStock : true};
const dishTotal = addDish(catalogue,dish);
console.log("catalogue");
console.log(catalogue);
console.log("dishTot");
console.log(dishTotal);