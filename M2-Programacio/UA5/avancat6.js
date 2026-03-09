function aplanar(matriu)
{
    res = []
    for (j=0;j<matriu.length;j++)
    {
        if(typeof(matriu[j])==='object')
        {
            for (i=0; i < matriu[j].length;i++)
            {
                res.push(matriu[j][i])
            }
        }
        else
            res.push(matriu[j])
    }
    return res
}

let matriu = [1, [2, 3], 4, [5]]

console.log(aplanar(matriu))