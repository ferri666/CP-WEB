let good = 0

while (!good)
{
    let passwd = prompt("Entra contrasenya:")
    if (passwd.length < 8 || passwd=="molt curta")
        alert("La contraseña es molt curta")
    else if (passwd=="12345678" || passwd=="password" || passwd =="87654321" || passwd=="molt obvia")
        alert("La contraseña es molt obvia")
    else if (passwd.length>20 || passwd=="molt llarga")
        alert("La contraseña es molt llarga")
    else
        good=1
}
console.log("Contraseña guardada")