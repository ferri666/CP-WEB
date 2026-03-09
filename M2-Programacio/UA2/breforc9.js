let impr=0
for (i=0; i<10; i++)
{
    for (j=1; j<i+2; j++)
    {
        impr*=10
        impr+=j
    }
    console.log(impr)
    impr = 0
}