function filtrarPositius(llista)
{
    
    let resultat = []
    for (i=0; i<numeros.length; i++)
    {
        if (numeros[i]>=0)
            resultat.push(numeros[i])
    }
    return resultat;
}
let numeros = [10, -5, 30, -2, 50]
console.log(filtrarPositius(numeros))