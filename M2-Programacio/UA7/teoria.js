let caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function() {
    caixa.style.backgroundColor = "red";
});

caixa.addEventListener("mouseout", function() {
    caixa.style.backgroundColor = "white";
});