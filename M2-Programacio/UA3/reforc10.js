function esPrimer(numero)
{
    let num = Number(numero)
    if (isNaN(num))
        return false
    if (num==1 || num==0)
        return false
    for (i=2; i<=num/2; i++)
    {
        if (num%i==0)
            return false
    }
    return true
}
it = 2
j = 0
while (j < 100)
{
    if (esPrimer(it))
    {
        j++
        console.log(it)
    }
    it++
}