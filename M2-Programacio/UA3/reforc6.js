function factorial(numero)
{
    let total = 1
    if (isNaN(Number(numero)))
        return 0
    for (i=2; i<=numero; i++)
    {
        total *=i
    }
    return total
}

console.log(factorial(170))
console.log(factorial("What"))