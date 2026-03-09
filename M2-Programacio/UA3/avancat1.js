function fibonnaci(num)
{
    if (isNaN(Number(num)))
        return 0
    first_num = 0;
    second_num = 1;
    total = 0
    for (i=0; i<num; i++)
    {
        tmp = first_num
        first_num = second_num;
        second_num += tmp;
    }
    return first_num;
}
for (i=0; i<20; i++)
{
    console.log(i+":"+fibonnaci(i))
}
