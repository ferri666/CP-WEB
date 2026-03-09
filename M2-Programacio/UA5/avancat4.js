function sumaMax(arr1, n)
{
    max = 0
    if (n > arr1.length)
        n = arr1.length
    for (i=0; i<arr1.length-n+1;i++)
    {
        total = 0
        for(j=0; j<n;j++)
        {
            total += arr1[i + j]
        }
        if (total > max)
            max = total
    }
    return max
}
let llista1 = [1, 2, 5, 2, 8, 1, 9]

console.log(sumaMax(llista1,3))
