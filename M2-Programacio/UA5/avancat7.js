function existeix(llista, valor)
{
    for (l=0; l<llista.length;l++)
    {
        if (llista[l]==valor)
            return l;
    }
    return -1;
}

function frequencies(array)
{
    let valor = []
    let freq = []
    let res = []
    for (i=0; i<array.length;i++)
    {
        let exis = existeix(valor, array[i])
        if (exis<0)
        {
            valor.push(array[i])
            freq.push(1)
        }
        else
        {
            freq[exis]+=1
        }
    }
    for (j=0; j < valor.length;j++)
    {
        let pair = []
        pair.push(valor[j])
        pair.push(freq[j])
        res.push(pair)
    }
    return res
}

let matriu = ["a", "b", "a", "c", "b", "a", "d","b","x","x","x"]

console.log(frequencies(matriu))