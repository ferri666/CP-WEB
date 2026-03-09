const secret = "1234"

let num = prompt("Entra la combinació correcta")
let fallos = 0


while (num != secret && fallos< 2)
{
    fallos++
    num = prompt("No. Et queden " + (3-fallos) + " intents")
}

if (fallos!=2)
    console.log("Has acertat! 🥳")
else
    console.log("Has fallat... 😔")