
let btn = document.getElementById("btn-find")

btn.addEventListener("click", function(){
    let poke = document.getElementById("pk").value

    fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
    .then(function(res) {
        return res.json(); // Pas 1: Convertim la resposta a JSON
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.error("Alguna cosa ha anat malament: " + error);
    });
})
