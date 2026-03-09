let secret = Math.floor(Math.random() * 10) + 1;

let num = Number(prompt("Digues un número del 1 al 10"))
let fallos = 0


while (num != secret && fallos< 3)
{
    fallos++
    num = Number(prompt("No. Tens " + fallos + " errors"))
}

if (fallos!=3)
    console.log("Has acertat! 🥳 Era el " + secret)
else
    console.log("Has fallat... 😔 Era el " + secret)