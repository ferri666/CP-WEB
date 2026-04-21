let nota = null;

        function tocarNota(num)
        {
            nota=document.getElementById("nota"+num)
            nota.play()
        }

        document.addEventListener("keydown", function(e)
        {
            if (e.key=="a")
                tocarNota(1);
            else if (e.key=="w")
                tocarNota(2);
            else if (e.key=="s")
                tocarNota(3);
            else if (e.key=="e")
                tocarNota(4);
            else if (e.key=="d")
                tocarNota(5);
            else if (e.key=="f")
                tocarNota(6);
            else if (e.key=="t")
                tocarNota(7);
            else if (e.key=="g")
                tocarNota(8);
            else if (e.key=="y")
                tocarNota(9);
            else if (e.key=="h")
                tocarNota(10);
            else if (e.key=="u")
                tocarNota(11);
            else if (e.key=="j")
                tocarNota(12);
        })