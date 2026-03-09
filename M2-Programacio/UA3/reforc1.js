function maximDeTres(n1, n2,n3)
{
    if (n1>=n2 && n1 >= n3)
        return n1
    else if (n2>n1 && n2 >= n3)
        return n2
    else return n3
}

console.log(maximDeTres(2,2,2))
console.log(maximDeTres(2,4,9))
console.log(maximDeTres(9,5,3))
console.log(maximDeTres(2,5,5))
console.log(maximDeTres(4,2,4))
console.log(maximDeTres(8,8,0))
console.log(maximDeTres(3,9,5))