let sol = prompt("Fa sol? (si/no)");
let deures = prompt("Has fet els deures? (si/no)");

if (sol=="si")
{
    if (deures=="si")
        console.log("Pots sortir a jugar! ⚽");
    else if (deures=="no")
        console.log("Acaba la feina primer!");
    else
        console.log("No he entés si has fet els deures (si/no)");
} else if (sol == "no")
    console.log("Millor queda't a casa 🌧️");
else
    console.log("No he entés si fa sol (si/no)");
