let num = Number(prompt("Día de la setmana:"));

switch(num)
{
    case 1:
        console.log("Avui som dilluns");
        break;
    case 2:
        console.log("Avui som dimarts");
        break;
    case 3:
        console.log("Avui som dimecres");
        break;
    case 4:
        console.log("Avui som dijous");
        break;
    case 5:
        console.log("Avui som divendres");
        break;
    case 6:
        console.log("Avui som dissabte");
        break;
    case 7:
        console.log("Avui som diumenge");
        break;
    default:
        console.log("Error: dia incorrecte");
        break;
}