function treureDuplicats(llista)
{

    let unic = []
    for (i=0; i<llista.length;i++)
    {
        let trobat = 0
        for (j=0; j<unic.length;j++)
        {
            if (llista[i]==unic[j])
            {
                trobat = 1
                break
            }    
        }
        if (!trobat)
            unic.push(llista[i])
    }
    return unic
}

let llista = [1, 2, 2, 3, 1, 4]

console.log(treureDuplicats(llista))

let llista2 = [2, 2, 2, 2, 2, 2]

console.log(treureDuplicats(llista2))