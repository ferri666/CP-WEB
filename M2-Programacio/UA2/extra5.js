let num = Number(prompt("Preu del producte:"));

if (num > 100)
    num -= num/10;
console.log("Preu final: " + num);