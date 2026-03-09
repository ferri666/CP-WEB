let num=Number(prompt("Introdueix un número"))
if (isNaN(num))
    console.log("That's not a number silly-billy!")
else{
    for (i=0; i<11; i++)
    {
        console.log(num+" x " +i + " = " + num*i)
    }
}
