const intersection = (arrays) => {
    return arrays.reduce((finalArr, currSubArr) => {
        // [5, 15]
        return finalArr.filter((item) => {
            return currSubArr.includes(item)
        })
    })
} 

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

const includes = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }

    return false;
}

const isOdd = num => num % 2 !== 0;

const filter = (arr, cb) => {
    const results = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            results.push(arr[i])
        }
    }

    return results
}

console.log(filter([1, 2, 3, 4], isOdd))


