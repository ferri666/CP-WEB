//Exercici 1
let A = Number(prompt("Número A:"));
let B = Number(prompt("Número B:"));

console.log("A=", A, "B=", B)
let tmp = A;
console.log("Haciendo cambios...");
A = B;
B = tmp;
console.log("A=", A, "B=", B);

//Exercici 2
let altura = Number(prompt("Altura rectangle:"));
let base = Number(prompt("Base rectangle:"));

console.log("Perímetre rectangle:", altura*2 + base*2);
console.log("Área rectangle:", altura* base);

//Exercici 3
let catet1 = Number(prompt("Catet 1:"));
let catet2 = Number(prompt("Catet 2:"));

let hipotenusa = Math.sqrt(catet1*catet1 + catet2*catet2)
console.log("C1:", catet1, "C2:", catet2, "H:", hipotenusa);

//Exercici 4
let res_corr = Number(prompt("Respostes correctes:"));
let res_inc = Number(prompt("Respostes incorrectes:"));
let res_nan = Number(prompt("Respostes sense contestar:"));

let nota_final = res_corr * 5 - res_inc;
console.log("Correctes:", res_corr, "Incorrectes:", res_inc, "Blanc:", res_nan, "Nota Final:", nota_final);

//Exercici 5

let tempF = Number(prompt("Temperatura en Farenheit:"));
let tempC = Number((tempF-32)*5/9);
console.log("Fº:", tempF, "Cº:", tempC);

//Exercici 6

let mon_2 =  Number(prompt("Monedes de 2€:"));
let mon_1 =  Number(prompt("Monedes de 1€:"));
let cen_50 = Number(prompt("Monedes de 50 cèntims:"));
let cen_20 = Number(prompt("Monedes de 20 cèntims:"));
let cen_10 = Number(prompt("Monedes de 10 cèntims:"));

let total = 2*mon_2 + mon_1;
let cent = 50 * cen_50 + cen_20*20 + 10 *cen_10;

total += Math.floor(cent/100);
cent = cent%100;

console.log("Tens",total, "euros i", cent, "cèntims");

//Exercici 7

let minutes = Number(prompt("Minuts:"));

console.log(minutes, "minuts són", Math.floor(minutes/60), "hores i ", minutes%60, "minuts");

//Exercici 8

const sou_base = 1200;
let ven1 = Number(prompt("Primera venta:"));
let ven2 = Number(prompt("Segona venta:"));
let ven3 = Number(prompt("Tercera venta:"));

let comisio = (ven1 + ven2 + ven3) * 0.1;

console.log("Total comisió:", comisio, "€\nTotal sou:", sou_base+comisio, "€");

//Exercici 9

let preu = Number(prompt("Total de compra:"));
let descompte = (preu*15)/100;

console.log("Preu final:", preu-descompte, "€");

//Exercici 10
let nota1 = Number(prompt("Mitjana parcials:"));
let nota2 = Number(prompt("Examen final:"));
let nota3 = Number(prompt("Treball final:"));

let notaf = nota1*55/100 + nota2*30/100 + nota3*15/100;

console.log("Nota final:", notaf);