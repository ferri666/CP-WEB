function mcd(num1, num2)
{
    if (isNaN(Number(num1)) || isNaN(Number(num2)))
        return 0

    if (num2 > num1){
        tmp = num1
        num1 = num2
        num2 = tmp
    }
    res = 1;
    while (res!=0)
    {
        res = num1 % num2
        if (res==0)
            return num2
        else
        {
            num1 = num2
            num2 = res
        }
    }
}

console.log(mcd(120,156))
console.log(mcd(57,11))
console.log(mcd(1000,15))
console.log(mcd(12,8))
