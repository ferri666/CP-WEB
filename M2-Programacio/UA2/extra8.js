let edat = Number(prompt("La Teva Edat:"));

if (edat < 5 || edat > 65)
    console.log("Entrada Gratis");
else if (edat < 16)
    console.log("5€");
else if (edat < 65)
    console.log("10€");
else 
    console.log("Error: Edat no vàlida");