// Challenge 1
const countdown = n => {

  console.log(n);

  const newNumber = n - 1;

  if (newNumber > 0) {
      countdown(newNumber);
  }
}

// console.log(countdown(5));
// console.log(countdown(10));


// Challenge 2
const sum = arr => {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr[arr.length - 1] + sum(arr.slice(0, arr.length - 1))
  }
}

//  console.log(sum([1,1,1])); // -> returns 3
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
const palindrome = str => {
  
  let newStr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "")
  let firstChar = newStr[0]
  let lastChar = newStr.slice(-1)

  if (newStr.length <= 1) {
    return console.log('true')
  } else {
    if (firstChar === lastChar) {
      palindrome(newStr.slice(1, -1))
    } else {
      return console.log('false')
    }
  }
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


// Challenge 4
const isPrime = (num, i = num - 1) => {
  if (num <= 1) {
    return false
  }
  if (i === 1) {
    return true
  }
  if (num % i === 0) {
    return false
  }

  return isPrime(num, --i)
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


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


//Challenge 6
const flattenRecursively = arr => {

}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
const findInOrderedSet = (arr, target) => {

}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
const countWaysToReachNthStair = n => {

}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
const getPermutations = arr => {

}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
const getRangeBetween = (x, y) => {

}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]