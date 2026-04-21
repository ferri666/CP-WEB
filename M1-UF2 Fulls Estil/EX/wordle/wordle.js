var goal = ["S","U","M","A","R"]
var paraula = []
var intents = 0;


function estadins(paraula, lletra)
{
    var n=0;
    for (i=0; i<paraula.length();i++)
    {
        if(paraula[i] == lletra)
            n++;
    }
    return n;
}

function nolasditja(lletra, paraula, goal, i)
{
    var lets = 0;
    if (estadins(paraula, lletra) > estadins(goal, lletra))
    {
        for(j=0;j<i;j++)
        {
            if (paraula[j]==lletra)
                lets++;
        }
    }
    return false;
}

for (i=0; i<paraula.length();i++)
{
    var lletra=document.getElementById("lletra"+intents+i)
    if(paraula[i] == goal[i])
        lletra.classList.add("correcte")
    else
    {
        if (estadins(goal, paraula[i]) > 0 )
             lletra.classList.add("casi")
        else
            lletra.classList.add("incorrecte")
    }
        
}

 document.addEventListener("keydown", function(e)
    {
        if (e.key)
    })
