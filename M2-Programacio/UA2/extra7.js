let user = prompt("El teu usuari:");
let passwd = prompt("La teva contrasenya:");

if (user == 'admin' && passwd=="1234")
    alert("Benvingut, administrador.");
else
    alert("Accés denegat");