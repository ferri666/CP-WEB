function estaOrdenada(llista)
{
    let comp = llista[0];
    for (i=0; i<llista.length-1;i++)
    {
        if (llista[i]>llista[i+1])
            return false
    }
    return true
}

let numeros = [1, 2, 2, 3, 1, 4]

console.log(estaOrdenada(numeros))

let ordenat = [1, 2, 3, 4]

console.log(estaOrdenada(ordenat))