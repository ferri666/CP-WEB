function repetir(missatge, vegades){
    let n = Number(vegades)
    if (isNaN(n))
        console.log("Número no vàlid")
    else
    {
        for (i=n; i>0; i--)
        {
            console.log(missatge)
        }
    }
}

repetir("Hola",6)
repetir(69, 1)
repetir("Res", 0)
repetir("Error", "patata")