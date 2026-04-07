const btn = document.getElementById("btn-new")
const inp = document.getElementById("ntask")
const form = document.getElementById("cont")
let ntasks = 3;

btn.addEventListener("click", function(){
    let val = inp.value.trim()
    inp.value = ""
    if (val.length > 0)
    {
        let nelement = document.createElement("div")
        let nchek = document.createElement("input")
        let nlabel = document.createElement("label")
        nchek.type = "checkbox"
        ntasks++
        nchek.id = "t"+ntasks
        nlabel.for = "t"+ntasks
        nlabel.textContent = val
        nelement.appendChild(nchek)
        nelement.appendChild(nlabel)
        form.appendChild(nelement)
    }
})