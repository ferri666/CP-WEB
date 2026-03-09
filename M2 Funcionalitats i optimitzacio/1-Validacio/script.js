function resaltar(element){
    if (element.value != '')
    {
         element.style.backgroundColor="yellow";
         element.style.border="3px dotted green";
        alert(element.value);
    }
    else
        element.style.backgroundColor="white";
}

function maxlen(element)
{

    if(element.value.length>15)
    {
        alert("Correu massa llarg!!!")
        element.value = ""
    }
}
function validacio (){
        const radioSeleccionat =
        document.querySelector('input[name="sex"]:checked');

        if (!radioSeleccionat) {
            alert("Selecciona un gènere");
        }

        // Validació CHECKBOX (mínim 1)
        const checkboxes =
            document.querySelectorAll('input[name="aficions"]:checked');

        if (checkboxes.length === 0) {
            alert("Selecciona almenys una afició");
        }

}