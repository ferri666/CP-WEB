const rps =["pedra", "paper", "tisores"]

let score_comp = 0
let score_user = 0

for (i=0; i<3; i++)
{
    let rand = Math.floor(Math.random() * 3)
    let comp = rps[rand]
    let user = prompt("¿Pedra, Paper o Tisores? (en minúscula)")
    while (!(rps.includes(user)))
        user = prompt("Digueu bé ¿Pedra, Paper o Tisores? (en minúscula)")
    if (user=="pedra")
    {
        if (comp=="tisores")
        {
            console.log(user,comp,"YOU WIN!")
            score_user+=1
        }
        else if (comp=="paper")
        {    
            console.log(user,comp,"YOU LOSE!")
            score_comp+=1
        }
        else
            console.log(user,comp,"EMPAT")
    }
    else if (user=="tisores")
    {
        if (comp=="paper")
        {
            console.log(user,comp,"YOU WIN!")
            score_user+=1
        }
        else if (comp=="pedra")
        {    
            console.log(user,comp,"YOU LOSE!")
            score_comp+=1
        }
        else
            console.log(user, comp,"EMPAT")
    }
    else
    {
        if (comp=="pedra")
        {
            console.log(user,comp,"YOU WIN!")
            score_user+=1
        }
        else if (comp=="tisores")
        {    
            console.log(user,comp,"YOU LOSE!")
            score_comp+=1
        }
        else
            console.log(user,comp,"EMPAT")
    }
}

console.log("Puntuació final: "+ score_user+"-"+score_comp)
if (score_user>score_comp)
    console.log("Enhorabona has guanyat!")
else if (score_user<score_comp)
    console.log("Llàstima, has perdut...")
else
    console.log("Has Empatat. Ens veiem a la próxima.")