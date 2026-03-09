const input = document.querySelector('input')

input.addEventListener("blur", function()
{
    let passwd = input.value;
    if (passwd.length <4)
        input.style.backgroundColor = "red";
    else
        input.style.backgroundColor = "green";
})

