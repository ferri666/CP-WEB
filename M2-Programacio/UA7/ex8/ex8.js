const colors = ["red", "orange", "green"]
let llum = 0;

function changeColor()
{
    let llum1 =document.getElementById(colors[llum]);
    llum1.classList.toggle("ences")
    llum1.style.boxShadow = "none";
    llum++;
    if (llum>2)
        llum=0;
    llum1 =document.getElementById(colors[llum]);
    llum1.classList.toggle("ences")
    llum1.style.boxShadow = "0px 0px 20px " + colors[llum]
}

setInterval(changeColor,2000)