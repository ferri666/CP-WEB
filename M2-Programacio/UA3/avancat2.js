function invertir(num)
{
    total = 0;
    if (isNaN(Number(num)))
        return 0
    while (num!=0)
    {
        total *=10;
        total += num%10
        num = Math.floor(num/10)
    }
    return total
}
console.log(invertir(9))
console.log(invertir(96))
console.log(invertir(321))
console.log(invertir(1234))
console.log(invertir(93249))