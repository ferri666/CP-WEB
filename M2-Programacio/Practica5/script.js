let comptador = 10;
const compt = document.getElementById("comptador")
const msg = document.getElementById("missatge-final")
let init = false;
let inter = setInterval(restar,1000)
clearInterval(inter)

function restar()
{
    if (comptador>0)
        comptador--;
    compt.innerHTML = comptador;
    if (comptador==0)
    {
        msg.innerHTML = "BOOOOOM! 💣"
        clearInterval(inter)
        init = false;
    }
}

function ignite()
{
    if (!init)
    {
        init = true;
        comptador = 10;
        compt.innerHTML = comptador;
        msg.innerHTML = ""
        inter = setInterval(restar,1000)
    }
}

function validate()
{
    let usuari = document.getElementById("usuari")
    let pass = document.getElementById("pass")
    let err = document.getElementById("error-msg")
    err.innerHTML = ""
    let has_char = usuari.value.search(/@/)
    if (has_char==-1)
        err.innerHTML += "Li falta '@' al usuari<br>"
    if (pass.value.length < 6)
        err.innerHTML += "Password massa curt"
}

let btn = document.getElementById("btn-iniciar")
btn.addEventListener("click", ignite);

let btn2 = document.getElementById("btn-validar")
btn2.addEventListener("click", validate)

let btn3 = document.getElementById("btn-joc")
let done = false
setTimeout(function(){
    btn3.innerHTML = "CLICKA ARA!"
    btn3.style.background = "greenyellow"
    let start = Date.now()
    btn3.addEventListener("click", function(){
        if (!done)
       { done = true;
        let finish = Date.now()
        let diff = finish - start;
        let misg = document.getElementById("msg");
        misg.innerHTML = "Has trigat " + diff +"ms"
        if (diff <= 500)
            misg.innerHTML += "<br>Ets un llamp! ⚡"}
    })
},3000)
