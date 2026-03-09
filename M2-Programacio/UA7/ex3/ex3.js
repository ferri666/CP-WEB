const btn = document.getElementById("btn-onoff")
let llum = document.getElementById("llum")

btn.addEventListener("click", function()
{
    if (btn.innerText=="ON")
        btn.innerText="OFF"
    else
        btn.innerText="ON"
    llum.classList.toggle("ences")
})