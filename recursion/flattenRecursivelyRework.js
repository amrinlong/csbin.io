//Challenge 6
const flattenRecursively = (arr, results) => {
    const item = arr[0]
    console.log(item)

    if (typeof item === 'object') {
        arr.shift()
        console.log(arr)
        return flattenRecursively(arr, results)
    }

    if (typeof item[0] === 'number') {
        results.push(item[0])
        arr.shift()
        console.log(arr)
        console.log(results)
        return flattenRecursively(arr, results)
    }
    
    
    
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, 2, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]