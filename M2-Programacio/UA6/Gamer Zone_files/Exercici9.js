let preu = document.querySelector("#joc-3 .preu").innerHTML;

let euros = Number(preu);

euros += 20
document.querySelector("#joc-3 .preu").innerHTML = euros;