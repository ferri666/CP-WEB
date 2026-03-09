function validarDNI(numero, lletra)
{
    const table = "TRWAGMYFPDXBNJZSQVHLCKE"
    res = numero %23;
    if (lletra == table[res])
        return true;
    else
        return false;
}

console.log(validarDNI(41525813, 'A'))
console.log(validarDNI(41525813, 'G'))