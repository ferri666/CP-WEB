function palindrom(frase)
{
    let len= frase.length
    let meitat = Math.floor(len/2)

    for (i=0; i<meitat; i++)
    {
        if(frase[i]!=frase[len-i-1])
            return false;
    }
    return true;
}

console.log(palindrom("ana"))
console.log(palindrom("anna"))
console.log(palindrom("radar"))
console.log(palindrom("hola"))