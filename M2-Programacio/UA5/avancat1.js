function rotar(llista, k)
{
    let ret = []
    if (k < 0)
    {
        k = Math.abs(k)
        k = k%llista.length
        k = llista.length - k
    }
    if (k > llista.length)
    {
        k = k%llista.length
    }
   

    if (k>0)
    {
        for (i=llista.length-k; i<llista.length;i++)
            ret.push(llista[i])

        for (j=0; j<llista.length-k; j++)
            ret.push(llista[j])
    }
    return ret
}

let numeros = [1,2,3,4,5]

console.log(rotar(numeros,2))
console.log(rotar(numeros,-2))
console.log(rotar(numeros,-998))
