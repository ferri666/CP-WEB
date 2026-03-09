    const container = document.getElementById("container")
    const btn = document.getElementById("btn-new")
    const btn2 = document.getElementById("btn-reset")
    btn.addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data)=>{
            p = document.createElement("p")
            p.innerHTML = data["slip"]["advice"];
            p.style.background = "hsl("+Math.floor(Math.random()*360)+","+Math.floor(Math.random()*100)+"%, 50%)"
            container.appendChild(p)
    })
    .catch((error) => console.error("Alguna cosa ha anat malament: " + error));
    });

    btn2.addEventListener("click", ()=>{
        while(container.firstChild)
            container.removeChild(container.firstChild)
    });
