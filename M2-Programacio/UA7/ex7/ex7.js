const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener("click", function()
{
    let num = input.value
    setTimeout(function(){
        alert('S\'ha acabat el temps!')
    }, num*1000)
})