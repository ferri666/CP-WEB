let secret=Math.floor(Math.random() * 100 + 1)
let num=Number(prompt("Digues un número del 1 al 100"))
while(num != secret)
{
    if (num > secret)
        num=prompt("El número secret es més petit que "+num)
    else if (num < secret)
        num=prompt("El número secret es més gran que "+num)
}
console.log("Sí! El número secret era "+ secret)