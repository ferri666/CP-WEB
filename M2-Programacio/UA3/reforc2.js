function avaluarNota(nota)
{
    if (nota<5)
        return "Suspès"
    else if (nota>=5 && nota<7)
        return "Aprobat"
    else if (nota>=7 && nota<8.5)
        return "Notable"
    else if (nota>=8.5)
        return "Excel·lent"
    else
        return "Nota no válida"
}

console.log(avaluarNota(0.5))
console.log(avaluarNota(6.9))
console.log(avaluarNota(7))
console.log(avaluarNota(8.5))
console.log(avaluarNota(11))
console.log(avaluarNota("Cagat"))