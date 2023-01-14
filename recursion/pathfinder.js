//Challenge 5
const pathFinder = (obj, arr, total = Object.keys(obj).length) => { // total = 2
    if (arr.length === 1) {
        console.log(obj[key])
    }

    if (arr.length > 1) {
      if (arr[0] === Object.keys(obj)[0]) { // or if Object.keys(obj)[0] === undefined
        objOut = Object.values(obj)[0]
        // console.log(Object.keys(obj)[0]) // ==> 'first'
        // console.log(Object.values(obj)[0]) // ==> { second: { third: "finish" }}
        newArr = arr.shift()
        return pathFinder(objOut, newArr)
        }
    }

}

const obj = { first: { second: { third: "finish" } }, 
                second: { third: "wrong" } };
const arr = ["first", "second", "third"];
  // const arr = ["second", "third"];
  console.log(pathFinder(obj, arr));   //-> "finish"