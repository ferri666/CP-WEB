function trobarMaxim(llista)
{
    let max = llista[0]
    for (i=1; i<llista.length;i++)
    {
        if (llista[i]>max)
            max = llista[i]
    }
    return max;
}
let llista = [1,56,866,2]
console.log(trobarMaxim(llista))
let llista2 = [-1,-56,-866,-2]
console.log(trobarMaxim(llista2))