const cats = [
  { name: "Mimi", picture: "https://placecats.com/200/200" },
  { name: "Billy", picture: "https://placecats.com/200/201" },
  { name: "Tigrou", picture: "https://placecats.com/200/202" },
];

const balises = [
  {name:"Mimi", balise :"firstCat" },
  {name:"Billy", balise :"secondCat" },
  {name:"Tigrou", balise :"thirdCat" },
]

/*
const catImg = document.createElement("img");
catImg.src="https://placecats.com/200/202";
const attache = document.querySelector(".gallery");
attache.appendChild(catImg);
*/



for(let i=0;i<balises.length;i++){
  const flagDiv = document.createElement("div");
  const flagh2 = document.createElement("h2");
  flagh2.textContent=balises[i].name;
  flagh2.className=balises[i].balise;
  flagDiv.appendChild(flagh2);
  document.body.appendChild(flagDiv);
}

for (let i=0;i<cats.length;i++){
    const catImg = document.createElement("img");
    catImg.src=cats[i].picture;
    catImg.alt=cats[i].name;
    if(cats[i].name==="Billy"){
      catImg.className="card-star";
    }
    else{
      catImg.className="card";
    }
    const attache = document.querySelector("." + balises[i].balise);
    attache.appendChild(catImg);
    /*attache.prepend(catImg);*/
}
