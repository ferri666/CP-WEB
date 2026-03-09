const est="#"
const esp=" "
let num = Number(prompt("Digues un número"))
while (isNaN(num))
    num = Number(prompt("Això no és un número, digues un número"))

for(i=num; i>0; i--)
{
    let print =""
    for (j=num;j>0; j--)
    {
        if (j==num || j==1 || i==num || i==1)
            print+=est
        else
            print+=esp
    }
    console.log(print)
}
