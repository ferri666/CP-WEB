function existeix(llista, valor)
{
    for (i=0; i<llista.length;i++)
    {
        if (llista[i]==valor)
            return true;
    }
    return false;
}
let llista = ['A','B','C','D']
console.log(existeix(llista,'D'))
console.log(existeix(llista,'F'))
console.log(existeix(llista,'A'))