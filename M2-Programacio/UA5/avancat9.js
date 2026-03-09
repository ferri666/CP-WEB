function whatgoeshere(res,fila,col)
{
    if (col==0 | col==fila | fila<2)
        return 1
    return (res[fila-1][col] + res[fila-1][col-1])
}

function pascal(files)
{
    let res = []
    for (i=0; i < files; i++)
    {
        let fila = []
        for (j=0; j<i+1;j++)
        {
            fila.push(whatgoeshere(res,i,j))
        }
        res.push(fila)
    }
    return res
}

console.log(pascal(20))
