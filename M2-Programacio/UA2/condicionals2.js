//Exercici 2

let edat = Number(prompt("Digues la teva edat:"));

if (edat < 18)
    console.log("No pots entrar. Torna al parvulari, nano.");
else if (edat < 65)
    console.log("Pots entrar a la festa.");
else if (edat >= 65)
    console.log("Tens entrada VIP gratuïta. Endavant iaio.");
else
    console.log("No pots entrar, ets molt suspitós.");
