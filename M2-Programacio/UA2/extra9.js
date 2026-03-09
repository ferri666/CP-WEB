let num1 = Number(prompt("Costat triangle 1:"));
let num2 = Number(prompt("Costat triangle 2:"));
let num3 = Number(prompt("Costat triangle 3:"));

if (num1 == num2 && num1 == num3)
    console.log("Triangle equilàter");
else if (num1==num2 || num1 == num3 || num2==num3)
    console.log("Triangle Isòsceles");
else
    console.log("Triangle Escalè");