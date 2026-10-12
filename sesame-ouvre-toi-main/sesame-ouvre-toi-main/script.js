// Fournie : transforme 220 en "2,20 €". Tu n'as pas à la modifier.
function formatPrice(cents) {
  return (cents / 100).toFixed(2).replace(".", ",") + " €";
}


// Étape 1 · Afficher la carte

const indexMenu = menu.length;
const allMenu =["tea","coffee","pastry"];
 

//selection des cartes en focntion de leur nom

function renderMenu(param="all"){
  
  const flagMenu = document.querySelector("#menu");
  flagMenu.replaceChildren();


  for (let i=0;i<indexMenu;i++){
        if (param !== "all" && menu[i].category !== param){
          continue;
        }
        const produit = document.createElement("article");
        const flagCategory = document.createElement("span");
        const flagName = document.createElement("h3");
        const flagPrice = document.createElement("p");
        const flagBtn = document.createElement("button");

        produit.classList.add("product");

        const produitCategorie = menu[i].category;
        flagCategory.textContent = produitCategorie;
        flagCategory.classList.add("product-category");

        const produitName = menu[i].name;
        flagName.textContent =produitName;  
        flagName.dataset.available = true;
        flagName.classList.add("product-name");

        const produitPrix = formatPrice(Number(menu[i].price));
        flagPrice.textContent = produitPrix;
        flagPrice.classList.add("product-price");

        flagBtn.type="button";
        flagBtn.textContent ="ajouter";
        flagBtn.id=menu[i].id;
        flagBtn.classList.add("product-add");

      
      if (!menu[i].available){
        produit.classList.add("is-sold-out");
        flagBtn.disabled  = true;
      }
      flagMenu.appendChild(produit);
      produit.appendChild(flagCategory);
      produit.appendChild(flagName);
      produit.appendChild(flagPrice);
      produit.appendChild(flagBtn);
    
      
  }
} 


// const categorieBtn = document.querySelectorAll("button");
// for(let i=0;i<4;i++){
//   if(categorieBtn[i].value==="all"){
//     categorieBtn[i].addEventListener('click', listeAll);
//   }
//   else if(categorieBtn[i].value==="coffee"){
//     categorieBtn[i].addEventListener('click', listeCafe);
//   }
//   else if(categorieBtn[i].value==="tea"){
//     categorieBtn[i].addEventListener('click', listeThe);
//   }
//   else{
//     categorieBtn[i].addEventListener('click', listePatisserie);
//   }
// }

//const flagMenu = document.querySelector("#menu")


const affichages = {
  all: renderMenu(),
  coffee: renderMenu("coffee"),
  tea: renderMenu("tea"),
  pastry: renderMenu("pastry"),
};

renderMenu();

const categorieBtn = document.querySelector("#categories");


categorieBtn.addEventListener("click",(event) => {
  const button = event.target.closest("button");
  if (!button) return;

  //affichages[button.value](event);
  const flagActive = document.querySelector(".is-active");

  if (flagActive){
    flagActive.classList.remove("is-active");
  }
  event.target.classList.add("is-active");
    
  renderMenu(button.value);   // "all", "coffee", "tea" ou "pastry"

});

// const categorieBtn = document.querySelectorAll("button");
// for(let i=0;i<4;i++){
//   if(categorieBtn[i].value==="all"){
//     categorieBtn[i].addEventListener('click',listeAll);
//   }
//   else if(categorieBtn[i].value==="coffee"){
//     categorieBtn[i].addEventListener('click', listeCafe);
//   }
//   else if(categorieBtn[i].value==="tea"){
//     categorieBtn[i].addEventListener('click', listeThe);
//   }
//   else{
//     categorieBtn[i].addEventListener('click', listePatisserie);
//   }
// }



// Étape 2 · Les produits épuisés
// function empty(event) {
//     event.preventDefault();
//     const btn = event.target.closest("product-add");
//     const 
//     if()

// }
// const flagBtn = document.querySelectorAll("#menu");
// flagBtn.addEventListener("click",empty);
// // )

//const flagMenu = document.querySelector("#menu");
//flagMenu.addEventListener('click',empty);

//
// Étape 3 · L'objet order
const order = {
  lines: [],

  add(product) {
    for (const line of this.lines) {
      if (line.id === product.id) {
        line.quantity++;
        return;
      }
    }
    this.lines.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  },

  remove(id) {
  for (let i = 0; i < this.lines.length; i++) {
    if (this.lines[i].id === id) {
      this.lines[i].quantity--;                 // on baisse de 1

      if (this.lines[i].quantity === 0) {
        this.lines.splice(i, 1);                // plus rien : on retire la ligne
      }
      return;                                   // trouvé, on s'arrête
    }
  }
},

  getSubtotal() {
    let total = 0;
    for (const line of this.lines) {
      total += line.price * line.quantity;
    }
    return total;
  },
};


// order.add(menu[3]);   // Cappuccino
// order.add(menu[3]);   // Cappuccino encore
// order.add(menu[12]);  // Cookie sésame
// for(let i=0;i<order.lines.length;i++){
//   console.log(order.lines[i]);
// }
//console.log(order.getSubtotal());   // 1070




// Étape 4 · Afficher le ticket


// function fullTicket (order){

//     const flagTicketFull = document.querySelector("#ticket-lines");
//     flagTicketFull.replaceChildren();
//     const flagMenu = document.querySelector("#menu");
//     const flagTicketLine = document.createElement("li");
//     const flagLineName = document.createElement("span");
//     const flagLineQty = document.createElement("span");
//     const flagLinePrice = document.createElement("span");
//     const flagBtn = document.createElement("button");

//     flagTicketLine.classList.add("ticket-line");

//     flagLineName.classList.add("line-name");
//     flagLineName.textContent = line.name;

//     flagLineQty.classList.add("line-qty");
//     flagLineQty.textContent=line.quantity;

//     flagLinePrice.classList.add("line-price");
//     flagLinePrice.textContent = formatPrice(Number(line.quantity) * Number(line.price));

//     flagBtn.type = "button";
//     flagBtn.classList.add("line-remove");
//     flagBtn.textContent = "−";
//     flagBtn.setAttribute("aria-label", `Retirer un ${line.name}`);
//     flagBtn .dataset.id = line.id;

//     flagTicketFull.appendChild(flagTicketLine);
//     flagTicketLine.appendChild(flagLineName);
//     flagTicketLine.appendChild(flagLineQty);
//     flagTicketLine.appendChild(flagLinePrice);
//     flagTicketLine.appendChild(flagBtn);
// };
function fullTicket (order){

    const flagTicketFull = document.querySelector("#ticket-lines");
    const ticketTotal = document.querySelector("#ticket-total");

    let totalEncaissement = 0;

    
    const ticketvide = document.querySelector("#ticket-empty");
    ticketvide.textContent ="Le ticket est vide";


    flagTicketFull.replaceChildren();


    for(let i=0;i<order.lines.length;i++){
      const flagMenu = document.querySelector("#menu");
      const flagTicketLine = document.createElement("li");
      const flagLineName = document.createElement("span");
      const flagLineQty = document.createElement("span");
      const flagLinePrice = document.createElement("span");
      const flagBtn = document.createElement("button");

      flagTicketLine.classList.add("ticket-line");

      flagLineName.classList.add("line-name");
      flagLineName.textContent = order.lines[i].name;

      flagLineQty.classList.add("line-qty");
      flagLineQty.textContent=order.lines[i].quantity;

      flagLinePrice.classList.add("line-price");
      const total = formatPrice(Number(order.lines[i].quantity) * Number(order.lines[i].price));
      flagLinePrice.textContent = total;

      flagBtn.type = "button";
      flagBtn.classList.add("line-remove");
      flagBtn.textContent = "−";
      flagBtn.setAttribute("aria-label", `Retirer un ${order.lines.name}`);
      flagBtn.id = order.lines[i].id;

      ticketvide.textContent ="";

      flagTicketFull.appendChild(flagTicketLine);
      flagTicketLine.appendChild(flagLineName);
      flagTicketLine.appendChild(flagLineQty);
      flagTicketLine.appendChild(flagLinePrice);
      flagTicketLine.appendChild(flagBtn);
    }

    ticketvide.classList.toggle("is-hidden", order.lines.length > 0);
    ticketTotal.textContent = formatPrice(order.getSubtotal());
};








const flagMenu = document.querySelector("#menu");

flagMenu.addEventListener("click", (event) => {
  const button = event.target.closest(".product-add");
  if (!button) return;

  const product = menu.find((p) => p.id === Number(button.id));
  order.add(product);
  fullTicket(order);
});




// Étape 5 · Retirer une ligne


const flagTicketLine = document.querySelector("#ticket-lines");
flagTicketLine.addEventListener("click",(event) => {
  const button = event.target.closest(".line-remove");
  if (!button) return;

  
  const product = menu.find((p) => p.id === Number(button.id));

  order.remove(product.id);
  fullTicket(order);
  
})
// Étape 6 · Filtrer par catégorie


// Étape 7 · Le prénom du client


const flagCustomer = document.querySelector("#customer-form");
const customerForm = document.querySelector("#customer-form");
const customerInput = document.querySelector("#customer-name");
const customerError = document.querySelector("#customer-error");
const ticketTitle = document.querySelector("#ticket-title");

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();                       // 1. pas de rechargement

  const name = customerInput.value.trim();      // 2 et 3. lire puis nettoyer

  if (name === "") {                            // 4. prénom vide
    customerError.textContent = "Entrez un prénom.";
    ticketTitle.textContent = "Ticket";
    return;
  }

  order.customer = name;                        // 5. enregistrer dans order
  customerError.textContent = "";               //    effacer une erreur précédente
  ticketTitle.textContent = `Ticket de ${order.customer}`;   // 6. textContent


});


// flagTicketLine.addEventListener("click",(event) => {
//   const button = event.target.closest(".line-remove");
//   if (!button) return;

  
//   const product = menu.find((p) => p.id === Number(button.id));

//   order.remove(product.id);
//   fullTicket(order);
  
// })

// Étape 8 · Le code promo
const flagPromo= document.querySelector("#promo-form");
const flagForm = document.querySelector("#promo-form");
const flagInput = document.querySelector("#promo-code");

flagPromo.addEventListener("submit", (event) => {
  event.preventDefault();                       // 1. pas de rechargement
  
  const code = flagInput.value.trim().toUpperCase();   // BARISTA ou barista → BARISTA
  const promoMessage = document.querySelector("#promo-message");
  const ticketDiscount = document.querySelector("#ticket-discount");
  const ticketTotal = document.querySelector("#ticket-total");

  if (code === "BARISTA") {
    order.promoCode = "BARISTA";                       // AJOUT
    const subtotal = order.getSubtotal();
    const discount = Math.round(subtotal * 0.1);
    const totalFinal = subtotal - discount;

    ticketDiscount.textContent = formatPrice(discount);
    ticketTotal.textContent = formatPrice(totalFinal);
    promoMessage.textContent = "Code BARISTA appliqué (−10 %)";
  } else {
    order.promoCode = "";                              // AJOUT
    ticketDiscount.textContent = formatPrice(0);
    ticketTotal.textContent = formatPrice(order.getSubtotal());
    promoMessage.textContent = "Code inconnu";
  }
});


  // if (code === "BARISTA") {
  //   const subtotal = order.getSubtotal();              // en centimes (ex: 1170)
  //   const discount = Math.round(subtotal * 0.1);       // 10 % arrondi
  //   const totalFinal = subtotal - discount;

  //   ticketDiscount.textContent = formatPrice(discount);
  //   ticketTotal.textContent = formatPrice(totalFinal);
  //   promoMessage.textContent = "Code BARISTA appliqué (−10 %)";
  // } else {
  //   // code inconnu
  //   ticketDiscount.textContent = formatPrice(0);
  //   ticketTotal.textContent = formatPrice(order.getSubtotal());
  //   promoMessage.textContent = "Code inconnu";
  // }
//});


// Bonus
// Bouton Encaisser.

const checkoutTotal = document.querySelector("#checkout");
checkoutTotal.addEventListener("click",(event) => {
  const promoCode = document.querySelector("#promo-code");
  promoCode.replaceChildren();
  const ticketDiscount = document.querySelector("#ticket-discount");
  ticketDiscount.replaceChildren();
  const ticketTotal = document.querySelector("#ticket-total");
  ticketTotal.replaceChildren();
  const ticketLines = document.querySelector("#ticket-lines");
  ticketLines.replaceChildren();
//  const menu = document.querySelector("#menu");
//  menu.replaceChildren();
//  renderMenu();
})