//Exercici 10
let cal1=Number(prompt("Ex10 First Number"));
let cal2=Number(prompt("Ex10 Second Number"));
let ope = prompt("Ex10 Operation to do (+, -, * or /)");


if (ope == '+')
    console.log(cal1 + cal2);
else if (ope == '-')
    console.log(cal1 - cal2);
else if (ope == '*')
    console.log(cal1 * cal2);
else if (ope== '/')
    console.log(cal1/cal2);
else
    console.log("Operation not Recognized");