function potencia(base, exponent){
    if (isNaN(Number(base)) || isNaN(Number(exponent)))
        return 0
    else
    {
        let total = 1
        for (i=0; i < exponent; i++)
        {
            total *=base
        }
        return total
    }
}

console.log(potencia(2,64))
console.log(potencia("what",6))
console.log(potencia("COMO", "QUE"))
console.log(potencia(4,"What"))