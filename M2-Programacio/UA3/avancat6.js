function comptarParaules(frase)
{
    len = frase.length
    it = 0;
    total = 0
    while (true)
    {
        while (it<len && frase[it]==' ')
            it+=1
        if (it==len)
            return total
        else
            total +=1
        while (it<len && frase[it]!=' ')
            it+=1
        if (it==len)
            return total
    }
      
}

console.log(comptarParaules("                 "))
console.log(comptarParaules("    Hola que    tal estas   ?"))
