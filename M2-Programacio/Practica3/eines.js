function areaCercle(radi)
{
    let resultat = Math.round(Math.PI * Math.pow(radi, 2))
    return (resultat.toFixed(2))
}

function tirarDau()
{
    return (Math.floor(Math.random()*6)+1)
}

function generarPassword(longitud)
{
    const caracters = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789@#$";
    let passw = ""
    for (i=0; i<longitud; i++)
    {
        passw += caracters[Math.floor(Math.random()*59)]
    }
    return passw
}

function mostrarContra()
{
    let long = document.getElementById("long").value;
    let pass = generarPassword(long)
    document.getElementById("contra").innerHTML = pass
}