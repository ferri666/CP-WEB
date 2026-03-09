let noms = ["Mario", "Luigi", "Peach", "Bowser","Toad"];
let punts = [500, 300, 800,666,100];

for (i=0; i<noms.length;i++)
{
    console.log(noms[i] +" té "+punts[i]+" punts")
}

let max = punts[0]
let i_max = 0

for (j=1; j<noms.length; j++)
{
    if (punts[j]>max)
    {
        max = punts[j]
        i_max = j
    }
}

console.log(noms[i_max]+" té el máxim de punts: "+ max)