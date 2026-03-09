function dibuixarEspais(n)
{
    esp=""
    for (j=0; j<n;j++)
        esp += ' '
    return esp
}

function dibuixarRombe(num)
{
    str = dibuixarEspais(num-1)
    str += '*'
    console.log(str)
    for (i=1;i<num;i++)
    {
        str=dibuixarEspais(num-1-i)
        str += '*'
        str += dibuixarEspais(2*(i-1)+1)
        str += '*'
        console.log(str)
    }
    for (k=num-1;k>1;k--)
    {
        str=dibuixarEspais(num-k)
        str += '*'
        str += dibuixarEspais(2*(k-2)+1)
        str += '*'
        console.log(str)
    }
    str = dibuixarEspais(num-1)
    str += '*'
    console.log(str)
}

dibuixarRombe(15)