
// Challenge 7
const intersection = arrays => {
  const results = []
  const obj = {}

  arrays.forEach((subArr) => {
    subArr.forEach((item) => {
        if (!obj[item]) {
            obj[item] = 1
            // console.log(obj)
        } else {
            obj[item] = obj[item] + 1
        }
        
    })
  })

  const objEntries = Object.entries(obj)
  
  for (let i = 0; i < objEntries.length; i++) {
    if (objEntries[i][1] === arrays.length) {
        results.push(+objEntries[i][0])
    }
  }

  return results
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]