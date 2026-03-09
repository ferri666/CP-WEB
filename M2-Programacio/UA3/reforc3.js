function calcular(n1, n2,ope)
{
    if (ope=='+')
        return n1+n2
    else if (ope=='-')
        return n1 - n2
    else if (ope=='*')
        return n1 * n2
    else if (ope=='/')
        return n1 / n2
    else if (ope=='%')
        return n1 % n2
    else
    {
        console.log("Error")
        return 0
    }
        
}

console.log(calcular (60, 9, `+`))
console.log(calcular(70, 1, '-'))
console.log(calcular(23, 3, '*'))
console.log(calcular(138, 2, '/'))
console.log(calcular (69,70, '%'))
