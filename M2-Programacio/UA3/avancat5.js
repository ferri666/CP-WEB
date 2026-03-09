function aBinari(num)
{
    let str = ""
    if (num==0)
        return "0"
    while (num>0)
    {
        str += num%2
        num = Math.floor(num/2)
    }
    let rev = str.split('').reverse().join('');
    return rev
}

for (i=0; i<=30; i++)
    console.log(i+": "+aBinari(i))