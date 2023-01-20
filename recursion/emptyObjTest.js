//Challenge 6
const flattenRecursively = (arr, results = []) => {

  

  if (Array.isArray(arr[0])) { // try undefined // send back out flatten array to arr recursively
    if (arr[0].length === 1) {
      results.push(arr[0][0])
      return results
    }
    return flattenRecursively(arr[0], results)
  }

  if (typeof arr[0] === 'number' || arr[0] === {}) {
    results.push(arr[0])
    arr.shift()
    console.log(results)
    return flattenRecursively(arr, results)
  }

}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]