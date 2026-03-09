function comptarMines(camp, x, y, files, columnes)
{
    let total = 0
    if (camp[y][x]==-1)
        return -1
    if (x>0)
    {
        if (camp[y][x-1]==-1)
            total++
        if (y>0 && camp[y-1][x-1]==-1)
            total++
        if (y < files-1 && camp[y+1][x-1]==-1)
            total++
    }
    if (x<columnes-1)
    {
        if (camp[y][x+1]==-1)
            total++
        if (y>0 && camp[y-1][x+1]==-1)
            total++
        if (y<files-1 && camp[y+1][x+1]==-1)
            total++
    }
    if (y>0 && camp[y-1][x]==-1)
        total++
    if (y<files-1 && camp[y+1][x]==-1)
        total++
    return total
}

function generarMines(files, columnes, mines)
{
    res = []
    for (y=0; y<files; y++)
    {
        fila = []
        for (x=0;x<columnes;x++)
            fila.push(0)
        res.push(fila)
    }
    for (i=0; i<mines.length;i++)
    {
        res[mines[i][0]][mines[i][1]]=-1
    }
    for (y=0; y<files; y++)
    {
        for (x=0;x<columnes;x++)
            res[y][x] = comptarMines(res, x, y, files, columnes)
    }
    return res
}

console.log(generarMines(3,3,[[1,1]]))