function moureZeros(array)
{
    let zeros = 0
    let res =  []
    for (i=0; i<array.length;i++)
    {
        if (array[i]==0)
            zeros++
        else
            res.push(array[i])
    }

    for (j=0; j<zeros;j++)
        res.push(0)
    return res
}

let matriu = [0, 1, 0, 3, 0, 12,0, 45]

console.log(moureZeros(matriu))