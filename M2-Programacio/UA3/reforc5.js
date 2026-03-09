function sumatori(numero)
{
    let total = 0
    if (isNaN(Number(numero)))
        n = 0
    for (i=1; i<=numero; i++)
    {
        total +=i
    }
    return total
}

console.log(sumatori(5))
console.log(sumatori(10))
console.log(sumatori("What"))