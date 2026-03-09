const est="❄️"
let impr=""
for (i=0; i<5; i++)
{
    for (j=0; j<i+1; j++)
    {
        impr+=est
    }
    console.log(impr)
    impr = ""
}