let num = Number(prompt("Digues un número"))
while (isNaN(num))
    num = Number(prompt("Això no és un número, digues un número"))

if (num > 100000000)
    console.log("Número massa gran")
else
{
    let suma = 0
    for (i=1; i<=num; i++)
        {
            suma+=i
        }
    console.log("Total: " + suma)
}
