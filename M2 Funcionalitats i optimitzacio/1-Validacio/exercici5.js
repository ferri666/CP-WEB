function validarFormulari(){
    let errors=""
    let errMessage = document.getElementById("errorForm")
    let nom = document.getElementById("nom").value
    if (nom == "")
        errors+="Nom incomplet "
    let email = document.getElementById("email").value;
    let patro = /^[\w]+@[\w]+\.[\w]{2,3}$/;
    if (!patro.test(email))
        errors += "Format de correu incorrecte";
    if (errors=="")
    {
        errMessage.style="color:green;"
        errMessage.textContent = "Tot bé"
        //Esta posat a false perque no es canvii la página, pero es vàlid
        return false
    }
    else
    {
        errMessage.style="color:red;"
        errMessage.textContent = errors
        return false
    }
}