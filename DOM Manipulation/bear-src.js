const Bears = document.querySelectorAll("img")

/*console.log(Bears.length);
console.log(Bears[0]);*/

const bearPictures = [
  "https://placebear.com/200/201",
  "https://placebear.com/200/202",
  "https://placebear.com/200/203",
  "https://placebear.com/200/204",
  "https://placebear.com/200/205",
];

for (let i=0;i<Bears.length;i++){
    Bears[i].src=bearPictures[i];
}
