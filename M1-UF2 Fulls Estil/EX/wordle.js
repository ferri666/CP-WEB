const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var goal = ["S","U","D","A","R"]
var paraula = []
var tries = 0;
var n_let = 0;
var ending = 0;

function noencara(goal, paraula, i)
{
    var lletra = paraula[i];
    var aparences = 0;
    for (j=0; j<i; j++)
    {
        if (paraula[j]==lletra)
            aparences++;
    }
    if (aparences < destinies)
        return true;
    return false;
}

function solve_word(paraula, goal)
{
    var yes;
    for (i=0; i<5; i++)
    {
        var leter= document.getElementById("lletra"+tries+i);
        if (paraula[i]==goal[i])
        {
            leter.classList.add("correcte")
            yes++;
        } else
            leter.classList.add("fallo")
    }
    if (yes==5)
        ending=1;
}

document.addEventListener("keydown", function(e){
    if (tries < 6)
    {
        if (letters.indexOf(e.key)>-1)
        {
            var letter = e.key.toUpperCase();
            paraula.push(letter);
            document.getElementById("lletra"+tries+n_let).innerText += letter;
            n_let++;
            if (n_let==5)
            {
                solve_word(paraula, goal)
                n_let=0;
                tries++;
            }   
        }
        else if (e.key=="Backspace")
        {
            paraula.pop()
            if (n_let>0)
                n_let--;
            document.getElementById("lletra"+tries+n_let).innerText="";
        }
    }
})