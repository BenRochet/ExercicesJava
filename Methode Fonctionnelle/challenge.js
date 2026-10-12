const catalogue = [
  { id: 1, name: "Tacos", price: 8.5, inStock: true },
  { id: 2, name: "Poke bowl", price: 11, inStock: false },
  { id: 3, name: "Tiramisu", price: 5, inStock: true },
];
function addToCart(cart, dish) {
    const result=[...cart];
    result.push(dish);
    return result;
}
function applyDiscount(cart, percent) {
    //cartResult = [...cart];
    const cartResult =  cart.reduce((dish) => {
    dish.price = dish.price * (1 - percent / 100);
    return dish;
  } )
  
    return cartResult;
}
function cartTotal(cart) {
    if(cart.length!==0){
      return cart.reduce((sum, dish) => sum + dish.price,0);
    }
    else{
        return 0;
    }
}
const cart = addToCart([], catalogue[0]);
const biggerCart = addToCart(cart, catalogue[2])
console.log(biggerCart);
console.log(catalogue[0].price);          // 8.5;
const discountedCart = applyDiscount(biggerCart, 20);
console.log(catalogue[0].price);          // 8.5
console.log(cartTotal(discountedCart));   // 10.8
console.log(cartTotal([]));               // 0
console.log(cart.length);                 // 1
console.log(catalogue[0]);          
console.log(catalogue[0].price);          // 8.5