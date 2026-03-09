const input = document.getElementById('nom')

function noNumbers(e)
{
    if (e.key >= '0' && e.key <='9')
            e.preventDefault()
}

input.addEventListener("focus", function()
{
    document.addEventListener("keydown", noNumbers)
})

input.addEventListener("blur", function()
{
    document.removeEventListener("keydown", noNumbers)
})

