/*
function keyEnter(event) {    
    event.preventDefault(); 
    console.log('La touche Entrée a été enfoncée !');//ajout event key
    ajoutLi();
}    
    
function ajoutLi(){
    //flagBtn = document.querySelector(".dropdown-btn");
    const flagContent = document.querySelector(".dropdown-content");
    const flagLi = document.querySelectorAll("li");

    if (flagLi.textContent==="La carte"){
        const flagMenu = document.createElement("h4");        
        flagMenu.textContent = "A la carte";
        flagLi.appendChild(flagMenu);
    }
    //taskList.appendChild(flagLi);
    //console.log(taskList);
    //taskInput.value = "";
}*/
/*
const flagBtn2 = document.querySelector("dropdown-content");


function Evnt (event){
    event.preventDefault(); 
    const tasks = document.querySelectorAll("li");
    for (let i = 0; i < tasks.length; i++) {
        
        console.log("boucle li");
        console.log(tasks[i].textContent);
        
    }
}*/

const flagBtn = document.querySelector(".dropdown-btn");
const flagContent = document.querySelector(".dropdown-content");
flagBtn.addEventListener("click", (event) => {
    console.log("flag evt");
    flagContent.classList.toggle("visible");
});


flagContent.

