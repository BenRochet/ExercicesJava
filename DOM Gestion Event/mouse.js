
function chargeImg(){
    const newImg = document.querySelector(".img-dog");
    newImg.src="https://placedog.net/300/201";
    newImg.alt="Un autre chien";
    const baliseImg = document.querySelector(".title");
    baliseImg.appendChild(newImg);
}

function surLigneEnter(){
    const baliseTitle = document.querySelector(".title");
    baliseTitle.style.color="red";
    document.body.prepend(baliseTitle);
}

function surLigneOut(){
    const baliseTitle = document.querySelector(".title");
    baliseTitle.style.color="black";
    document.body.prepend(baliseTitle);
}



document.querySelector(".img-dog").addEventListener("click",chargeImg);

document.querySelector(".title").addEventListener("mouseenter",surLigneEnter);

document.querySelector(".title").addEventListener("mouseleave",surLigneOut);

