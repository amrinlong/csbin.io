//Challenge 5
const pathFinder = (obj, arr) => { // Object.keys(obj).length = 2
    const firstObjVal = Object.values(obj)[0]
    const firstObjKey = Object.keys(obj)[0]

    if (arr.length === 1) {
        console.log(firstObjVal)
    }

    // for (let key in obj) {
    //     if (arr[0] !== key) {
    //         continue
    //     }
        
    //     if (arr[0] === firstObjKey) {
    //     arr.shift()
    //     return pathFinder(firstObjVal, arr)
    //     }

    // }

    // if (arr[0] === firstObjKey) {
    //     arr.shift()
    //     return pathFinder(firstObjVal, arr)
    // } 

    console.log(firstObjVal)
}

const obj = { first: { second: { third: "finish" } }, 
                second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
const arr = ["second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"