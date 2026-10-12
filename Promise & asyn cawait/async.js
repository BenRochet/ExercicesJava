// setTimeout(() => {
//   console.log("Deux secondes plus tard");
// }, 2000);

// console.log("Flag1");

// function orderTacos() {
//   return new Promise((resolve, reject) => {
//     console.log("Camille commande des tacos...");
//     setTimeout(() => {
//       resolve("Tacos prêts, bon appétit !");
//     }, 2000);
//   });
// }
// orderTacos().then((message) => console.log(message));
// console.log("Camille continue à discuter en attendant.");


// console.log("Flag2");


// function orderTacos(outOfStock) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (outOfStock) reject("Plus de tacos, désolé !");
//       else resolve("Tacos prêts !");
//     }, 2000);
//   });
// }
// orderTacos(true)
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Camille sort du restaurant"));

// console.log("flag3");

// const data = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
// console.log(data);
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
//   console.log(response.name);
// });

// // let result;
// // orderTacos(false).then((message) => { result = message; });
// // console.log(result); 

// console.log("flag4");

// fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
//   .then((response) => response.json())
//   //.then((response) => response.json())
//   //.then((response) => console.log(response))
//   .then((pokemon) => {
//     console.log(pokemon.name, pokemon.height, pokemon.weight);
//   })
//   .catch((error) => console.error("Oups :", error));
// // pikachu 4 60


// async function searchPokemon(name) {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   const pokemon = await response.json();
//   console.log(pokemon.name, pokemon.height, pokemon.weight);
// }
// searchPokemon("pikachu");
// searchPokemon("pikachou"); 








async function searchPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    //const response = await fetch(`https://pokeapi.invalid/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Pokémon "${name}" introuvable (code ${response.status})`);
    }
    const pokemon = await response.json();
    console.log(pokemon.name, pokemon.height, pokemon.weight);
  } catch (error) {
    console.error("Erreur :", error.message);
  }
}
searchPokemon("pikachu4");
searchPokemon("squirtle");
searchPokemon("squirtel");