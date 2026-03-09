let aprovats = 0
let suspes = 0

for (i=0; i<5; i++)
{
    let nota = Number(prompt("Introdueix una nota:"))
    if(nota>=5)
        aprovats+=1
    else if (nota < 5)
        suspes+=1
    else
        console.log("Nota no válida")
}

console.log("Aprovats:",aprovats,"Suspesos:",suspes)