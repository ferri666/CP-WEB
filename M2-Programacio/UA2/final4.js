for (i=1; i<=50; i++)
{
    resultat = " "
    if(i%3==0)
        resultat+="Fizz"
    if (i%5==0)
        resultat+="Buzz"
    if (resultat==" ")
        resultat += i
    console.log(resultat)
}