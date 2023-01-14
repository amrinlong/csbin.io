//Challenge 6
const flattenRecursively = (arr, results = []) => { // arr = [1, 2, {}, [3, [[4]]]], results = [], i = 4
    // 1 , 2, {}, [3, [[4]]] --> if num
    // 2, {}, [3, [[4]]] --> if num
    // {}, [3, [[4]]] --> if obj
    // [3, [[4]]] --> if arr
    // 3, [[4]] --> if num
    // [[4]] --> if arr
    // [4] --> if arr
    // 4 --> if num
    let item = arr[0]

    if (typeof item === 'number') {
        results.push(item)
        arr.shift()
        return flattenRecursively(arr, results)
    }

    if (typeof item === 'obj') {
        arr.shift()
        return flattenRecursively(arr, results)
    }
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, 2, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


// if (typeof item === 'object') {
    //     arr.shift()
    //     console.log(arr)
    //     return flattenRecursively(arr, results)
    // }

    // if (typeof item[0] === 'number') {
    //     results.push(item[0])
    //     arr.shift()
    //     console.log(arr)
    //     console.log(results)
    //     return flattenRecursively(arr, results)
    // }