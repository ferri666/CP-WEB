const btn = document.querySelector('button')
const img = document.querySelector('img')

btn.addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            img.src = data.message
        })
        .catch(function(error) {
            console.error("Alguna cosa ha anat malament: " + error);
        });

})