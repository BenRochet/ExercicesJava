const imgCat = document.querySelector(".img-cat");
imgCat.src = "https://placecats.com/300/202";

const textCat = document.querySelector("body p");
textCat.textContent="il est réveillé";

document.querySelector(".title").textContent = "Le chat <em>du jour</em>";
document.querySelector(".title").innerHTML= "Le chat <em>du jour</em>";

const firstName = prompt("Ton Prénom");
const titre = document.querySelector(".title");
titre.textContent=`Hello ${firstName}`;