let results = []
  let obj = {}

  // for (let i = 0; i < arrays.length; i++) {
  //   for (let j = 0; j < arrays[i].length; j++) {
  //     obj[arrays[i][j]] = () => {

  //     }
  //     console.log(obj)
  //   }
  // }

  arrays.forEach((arr, y, z) => { // x = array, y = idx
    // console.log(arr)
    // console.log(y)

    

    arr.forEach((a, b, c, ini = 0) => { // a = value, b = idx
      let i = arr.length; // i = 4
      obj[a] = i - 1;
      
    })
    console.log(obj)
  })
  
  return 