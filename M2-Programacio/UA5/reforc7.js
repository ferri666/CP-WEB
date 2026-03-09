function paraulaLlarga(llista)
{
    let max=0;
    let llarga=-1;
    for (i=0; i<llista.length;i++)
    {
        if (llista[i].length>max)
        {
            max = llista[i].length
            llarga = i
        }
    }
    return llista[llarga]
}
let noms = ["Ana", "Montserrat", "Pol", "Alexandre", "Alealealealejandro"]

console.log(paraulaLlarga(noms))