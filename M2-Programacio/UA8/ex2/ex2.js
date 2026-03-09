const btn = document.getElementById("btn-price")
const p =document.getElementById("price")

btn.addEventListener("click", function(){
fetch("https://api.coinlore.net/api/ticker/?id=90")
    .then(function(res) {
        return res.json(); // Pas 1: Convertim la resposta a JSON
    })
    .then(function(data) {
        p.innerHTML = data[0]["price_usd"] + "$"
    })
    .catch(function(error) {
        console.error("Alguna cosa ha anat malament: " + error);
    });
})