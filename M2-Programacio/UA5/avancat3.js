function existeix(llista, valor)
{
    for (l=0; l<llista.length;l++)
    {
        if (llista[l]==valor)
            return true;
    }
    return false;
}

function diferencia(arr1, arr2)
{
    let ret = []
    for (i=0; i<arr1.length; i++)
    {
        if (!existeix(arr2,arr1[i]))
            ret.push(arr1[i])
    }
    for (j=0; j<arr2.length; j++)
    {
        if (!existeix(arr1,arr2[j]))
            ret.push(arr2[j])
    }
    return ret
}
let llista1 = [1, 2, 3]
let llista2 = [2, 3, 4]
console.log(diferencia(llista1, llista2))