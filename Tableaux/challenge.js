const fireSigns = ["♈", "♌"]; /* manque "♐"*/
const earthSigns = ["♉", "♍", "♑", "♐"];/* "♐" est en trop*/
const airSigns = ["♓", "♊", "♎", "♒"];/* "♓" est en trop*/
const waterSigns = ["♏", "♓"];/* manque ♋*/

const fS = earthSigns.pop();
fireSigns.push(fS);
airSigns.shift();
waterSigns.push("♋")

console.log(fireSigns);
console.log(earthSigns);
console.log(airSigns);
console.log(waterSigns);