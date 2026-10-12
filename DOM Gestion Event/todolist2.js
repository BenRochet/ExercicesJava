const form = document.querySelector("#todo-form");
const taskList = document.querySelector("#task-list");

/*form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    console.log("Tâche envoyée !");
});*/


function ajoutLi(){
    const taskInput = document.querySelector("#task-input");
    const flagLi = document.createElement("li");
    flagLi.textContent = taskInput.value.trim();
    taskList.appendChild(flagLi);
    taskInput.value="";
}

function Event(event){
    event.preventDefault();
    console.log("flag Event");
    ajoutLi();
}

form.addEventListener("submit",Event);



const flagLi = document.querySelector("li");
const tasks = document.querySelectorAll("#task-list");
for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", () => {
    tasks[i].classList.toggle("done");
    tasks.appendChild(flagLi);
    });
}