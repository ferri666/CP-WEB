function esMajorEdat(edat){
    if (edat >= 18)
        return true
    else
        return false
}

console.log(esMajorEdat(69))
console.log(esMajorEdat(18))
console.log(esMajorEdat(6))
console.log(esMajorEdat("What"))