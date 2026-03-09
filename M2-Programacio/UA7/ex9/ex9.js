    let comptador = 0;
    let jugat = false;
    let joc = false;
    let caixa = document.querySelector(".caixa")
    let text = document.getElementById("text")

    caixa.addEventListener("mouseover", function(){
        if (!jugat)
        {
        text.innerHTML = "Preparat y fes clic a la caixa el més ràpid que poguis"
        jugat=true;
        setTimeout(function() {
            text.innerHTML = "3";
            setTimeout(function() {
                text.innerHTML = "2";
                setTimeout(function() {
                    text.innerHTML = "1";
                    setTimeout(function() {
                            joc = true;
                            text.innerHTML = "<h1>FES CLICK!!!!</h1>";
                            setTimeout(function() {
                                joc = false;
                                text.innerHTML = "Has fet " + comptador + " clics";
                                if (comptador == 69)
                                {
                                    text.innerHTML += "<br>Nice!"
                                }
                                else if (comptador>60)
                                {
                                    text.innerHTML += "<br>Felicitats!"
                                }
                                else if (comptador==0)
                                {
                                    text.innerHTML += "<br>Ni tan sols ho has intentat..."
                                }
                                else if (comptador <20)
                                {
                                    text.innerHTML += "<br>Massa lent..."
                                }
                                else
                                    text.innerHTML += "<br>Ben jugat."
                            }, 10000)
                        }, 1000);
                }, 1000);
            }, 1000);
        }, 3000);
        }
        })
        caixa.addEventListener("click", function(){
        if (joc)
        {
            comptador++;
            document.getElementById("compt").innerHTML = comptador;
        }
    });