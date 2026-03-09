function encriptar(text, clau)
{
    str = ""
    len = text.length
    for (i=0; i<len; i++)
    {
        if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122)
        {
            sum = text.charCodeAt(i) + clau
            while (sum > 122)
                sum -= 26
            while (sum<97)
                sum += 26
            str+=String.fromCharCode(sum)
        }
        else if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90)
        {
            sum = text.charCodeAt(i) + clau
            while (sum > 90)
                sum -= 26
            while (sum<65)
                sum += 26
            str+=String.fromCharCode(sum)
        }
        else
            str += text[i]
    }
    return str
}

console.log(encriptar("hola", 0))
console.log(encriptar("abcd", 3))
console.log(encriptar("abcd", -2))
console.log(encriptar("Aqui es Nadal y Estic Content",1000))