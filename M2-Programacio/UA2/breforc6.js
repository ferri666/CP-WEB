const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let rand = Math.floor(Math.random() * 26);
let secret = abc[rand]

let test = prompt("Digues una lletra")
let fallos = 0

while (test != secret && fallos< 6)
{
    fallos++;
    test = prompt("No. Tens "+ fallos+" errors. Digues una altre lletra")
}
if (fallos !=10)
    console.log("Has acertat! 🥳 Era la " + secret)
else
    console.log("Has fallat... 😔 Era la " + secret)