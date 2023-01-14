const pathFinder = (obj, arr) => { // Object.keys(obj).length = 2
  

  if (arr.length === 1) {
      console.log(Object.values(obj)[0])
  }

  for (let key in obj) {
    if (key === arr[0]) {
      // console.log(key)
      // console.log(obj[key])
      arr.shift()
      return pathFinder(obj[key], arr)
    }
  }
}

const obj = { first: { second: { third: "finish" } }, 
              second: { third: "wrong" } };
const arr = ["first", "second", "third"];
// const arr = ["second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"