const input = document.querySelector('input')

input.addEventListener("input", function()
{
    document.querySelector("p").innerHTML = input.value
})

