const form = document.querySelector("#todo-form");
const taskList = document.querySelector("#task-list");
/*
form.addEventListener("submit", () => {
    console.log("Tâche envoyée !");
    });
    */

function ajoutLi(){
    const taskInput = document.querySelector("#task-input");
    const flagLi = document.createElement("li");
    flagLi.textContent = taskInput.value.trim();
    taskList.appendChild(flagLi);
    //taskList.appendChild(flagLi);
    //console.log(taskList);
    taskInput.value = "";
}

   function keyEnter(event) {    
       event.preventDefault(); 
       console.log('La touche Entrée a été enfoncée !');//ajout event key
       ajoutLi();
       
    }
    
form.addEventListener("submit",keyEnter);


const flagLi = document.querySelector("li");
const tasks = document.querySelectorAll("#task-list");
for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", () => {
    tasks[i].classList.toggle("done");
    tasks.appendChild(flagLi);
    });
}
/*
list.addEventListener("click", (event) => {
  console.log(event.target);           // l'élément cliqué : le <li>
  console.log(event.target.tagName);   // "LI"
});
*/
/*
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});*/