function fusionar(arr1, arr2)
{
    let res = []
    it1 = 0
    it2 = 0
    while (it1 < arr1.length)
    {
        while (arr2[it2]<arr1[it1])
        {
            res.push(arr2[it2])
            it2+=1
        }
        res.push(arr1[it1])
        it1+=1
    }
    while (it2 < arr2.length)
    {
        while (arr1[it1]<arr2[it2])
        {
            res.push(arr1[it2])
            it1+=1
        }
        res.push(arr2[it2])
        it2+=1
    }
    return res
}

let array1 = [1,3,5]
let array2 = [2,4,6,8]

console.log(fusionar(array1,array2))