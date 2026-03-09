function contarVots(llista,color)
{
    let vots=0;
    for (i=0; i<llista.length;i++)
    {
        if (llista[i]==color)
            vots++
    }
    return vots
}
let colors =["Vermell", "Verd", "Vermell", "Blau", "Vermell"]

console.log(contarVots(colors,"Vermell"))