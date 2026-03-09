const div = document.getElementById('coordenades')
const txt = document.querySelector('p')


div.addEventListener("mousemove", function(e){
    txt.innerHTML = e.clientX +", "+ e.clientY;
})

