function transposar(matriu)
{
    let leny = matriu.length
    let lenx= matriu[0].length
    let res = []
    for (i=0; i<lenx; i++)
    {
        let fila = []
        for (j=0;j<leny;j++)
        {
            fila.push(matriu[j][i])
        }
        res.push(fila)
    }
    return res
}

let matriu = [
    [1,2,3],
    [4,5,6]
]

console.log(transposar(matriu))