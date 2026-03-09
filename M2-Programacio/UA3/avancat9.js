function arrelAproximada(num)
{
    for (i=0; i<=num; i++)
    {
        if(i*i>=num)
            if (i*i==num)
                return i
            else
                return i-1
    }
    return i-1
}
for (j=1; j<=50;j++)
    console.log(j+": "+arrelAproximada(j))
