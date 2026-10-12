function calculTotal(event) {
  event.preventDefault();
  const taskQty = document.querySelector("#quantity");
  const taskTotal = document.querySelector("#total");

  const qty = Number(taskQty.value);
  console.log(typeof qty);

  const total = qty * 8;

  if (qty >= 10) {
    taskTotal.classList.add("too-many");
  }
  else {
    taskTotal.classList.remove("too-many");
  }

  taskTotal.textContent = `Total : ${total} € pour ${qty} tacos`;
  taskQty.value = "";
}

function vider(event) {
  event.preventDefault();
  const taskQty = document.querySelector("#quantity");
  const taskTotal = document.querySelector("#total");
  taskQty.value = "";
  taskTotal.textContent = "Total : 0 € pour 0 tacos";
}

const form = document.querySelector("#order-form");
form.addEventListener('submit', calculTotal);

//vider #reset

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", vider);
