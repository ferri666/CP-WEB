function imprimirTaula(numero)
{
    if (isNaN(Number(numero)))
        n = 0
    for (i=1; i<=10; i++)
    {
        console.log(numero+" x " + i + " = " + i * numero)
    }
}

imprimirTaula(5)
imprimirTaula(0)
imprimirTaula(9)