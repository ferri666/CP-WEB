function changecolor()
{
    document.body.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
};

function afegir_tasca()
{
    task = document.getElementById("nova-tasca").value
    li = document.createElement("li")
    li.innerHTML = task;
    ul = document.getElementById("llista-tasques")
    ul.appendChild(li)
    document.getElementById("nova-tasca").value = ""
}

btn = document.getElementById("btn-color")
btn.addEventListener("click", changecolor);

btn2 = document.getElementById("btn-afegir")
btn2.addEventListener("click", afegir_tasca);

let images = ['img1.jpg', 'img2.jpg', 'img3.jpg']
let index = 0

btn3 = document.getElementById("btn-next")
btn3.addEventListener("click", function(){
    index++;
    if (index > 2)
        index = 0;
    img = document.getElementById("foto-carrusel")
    img.src = images[index]
});