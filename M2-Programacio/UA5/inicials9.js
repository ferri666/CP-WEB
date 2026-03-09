let numeros=[]
for (i=0; i<5; i++)
{
    numeros.push(Math.floor(Math.random() * 10))
}
console.log(numeros)
let trobat = 0
for (j=0; j<numeros.length;j++)
{
    if (numeros[j]==5)
    {
        trobat = 1
        console.log("Trobat 5 a la posició "+j)
        break
    }      
}

if (!trobat)
    console.log("No hi ha 5")