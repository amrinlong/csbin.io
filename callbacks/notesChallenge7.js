
// Challenge 7
const intersection = arrays => {
  let results = []
//   let obj = {}

//   arrays.forEach((x, y) => {
//     // console.log(arrays[y])
//     x.forEach((z) => {
//         console.log(z)
//         obj[z] = 'test' + obj[z]
//     })
//   })

//   return obj

const merged = [].concat(...arrays) // [ 5, 10, 15, 20, 15, 88, 1,  5,  7,  1, 10, 15, 5, 20 ]

// merged.forEach((x) => {

// })

let count = 0;

// merged.filter((x) => {
//     console.log(x)
// }).length

for (let i = 0; i < merged.length; i++) {
    
}

}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]