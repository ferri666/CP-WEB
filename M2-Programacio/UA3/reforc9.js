function dibuixarQuadrat(numero, simbol)
{
    if (isNaN(Number(numero)))
        n = 0
    for (i=1; i<=numero; i++)
    {
       console.log(simbol.repeat(numero))
    }
}

dibuixarQuadrat(5,'*')
dibuixarQuadrat(2,'#')
dibuixarQuadrat(9,'.')