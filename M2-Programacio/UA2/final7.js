do
{
    let num1=Number(prompt("Primer Numero:"))
    let num2=Number(prompt("Segon Numero:"))
    let ope=prompt("Operació a realitzar:")
    if (ope == '+')
        console.log(num1 +"+"+num2+"="+(num1 + num2));
    else if (ope == '-')
        console.log(num1 +"-"+num2+"="+(num1 - num2));
    else if (ope == '*')
        console.log(num1 +"*"+num2+"="+(num1 * num2));
    else if (ope== '/')
        console.log(num1 +"/"+num2+"="+(num1 / num2));
    else if (ope== '%')
        console.log(num1 +"%"+num2+"="+(num1 % num2));
    else
        console.log("Operation not Valid");
    sn = prompt("Vols continuar operant? s/n")
    while (sn != "n" && sn!="s")
    {
        sn = prompt("Vols continuar operant? s/n")
    }
    if (sn=="n")
        break
} while(true)
