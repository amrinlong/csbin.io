//Challenge 6
const flattenRecursively = (arr) => {
    const item = arr[0]
    if (typeof item === 'object') {
        arr.shift()
        return flattenRecursively(arr, results)
    } 
    if (typeof item === 'array') {
        results.push(item[0])
        arr.shift()
        return flattenRecursively(arr, results)
    } 
    if (typeof item === 'number') {
        results.push(item)
        arr.shift()
        return flattenRecursively(arr, results)
    }
    return results
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]