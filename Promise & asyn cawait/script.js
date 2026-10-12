const form = document.querySelector("#search-form");
const input = document.querySelector("#search");
const result = document.querySelector("#result");

async function searchPokemon(name) {
  // à toi : va chercher le Pokémon, et renvoie-le
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(response.status === 404){
        return null;
    }
    if(!response.ok){
        throw new Error(`Erreur HTTP${response.status}`);
    }
    return await response.json();
  }
  catch(error){
    console.log("Erreur :", error.message);
    )
  }
}
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = input.value.trim().toLowerCase();
  if(name===""){
    result.textContent = "Tae le nom d'un Pokémon.";
    return;
  }
result.textContent="Recherche en cours...";

try{
  const pokemon = await searchPokemon(input.value);
  if(pokemon===null){
    result.textContent="Pokémon introuvable, verifie l'orthographe";
  }
    result.textContent = `${pokemon.name} : ${pokemon.height} dm, ${pokemon.weight} hg`;  
  catch (error){
    result.textContent = "Impossible de joindre le service, réessaie dans un instant.";
  }
});