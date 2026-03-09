    const container = document.getElementById("container")

    fetch("https://rickandmortyapi.com/api/character")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        for (i=0; i<20;i++)
        {
            console.log(data["results"][i])
            let div = document.createElement("div")
            let img = document.createElement("img")
            let p = document.createElement("p")
            img.src = data["results"][i]["image"]
            p.innerHTML = "<b>"+data["results"][i]["name"] + "</b><br>Gender: "+ data["results"][i]["gender"]+"<br> Status: " + data["results"][i]["status"]
            div.appendChild(img)
            div.appendChild(p)
            container.appendChild(div)
        }
    })
    .catch(function(error) {
        console.error("Alguna cosa ha anat malament: " + error);
    });
