let str=prompt("Digues una frase")
let suma = 0
let len = str.length
for (i=0; i<len; i++)
{
    if (str[i]=='a')
        suma+=1;
}
console.log("La frase conté "+suma+" 'a'")