    function changecolor(caixa)
    {
        caixa.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
    };

    function changeposition(caixa)
    {
        caixa.style.left = Math.floor(Math.random()*700) + "px";
        caixa.style.top = Math.floor(Math.random()*400)+20 + "px";
    }

    function changesize(caixa, size)
    {
        caixa.style.width = size + "px";
        caixa.style.height = size+ "px";
    }
    
    let comptador = 0;
    let points = 0;
    let difficulty = 888;
    let mida = 70;
    let caixa = document.querySelector(".caixa")
    let interval =setInterval(function() {
        comptador++;
        changeposition(caixa)
        changecolor(caixa)    
    }, difficulty);
    let text = document.getElementById("text")
    let p = document.getElementById("points")
    caixa.addEventListener("click", function(){
        points++;
        p.innerHTML = points;
        text.innerHTML = "Has trigat " + comptador +" segons."
        comptador = 0;
    })