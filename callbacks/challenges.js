// console.log('Hello, world!');

// Challenge 1
const addTwo = num => {
  return num + 2
}

// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
const addS = word => {
  return word + 's'
}

// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
const map = (array, callback) => {
  const results = []
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]))
  }
  return results
}

// console.log(map([1, 2, 3], addTwo));

// let someNum = 5;
// let otherNum = someNum; // 5

// someNum += 10;
// otherNum += 8;

// console.log('someNum -->', someNum);
// console.log('otherNum -->', otherNum);

// const someArr = ["red", "white"];
// const otherArr = someArr;

// someArr.push("blue")
// otherArr.push("green")

// console.log('someArr -->', someArr)
// console.log('otherArr -->', otherArr)

// Challenge 4
const forEach = (array, callback) => {
  return array.forEach(x => callback(x))
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
  });
// console.log(alphabet); //prints 'abcd'

// Challenge 5 // NEED HELP
const mapWith = (array, callback) => {
  return array.map(x => callback(x))
}

// console.log(mapWith([2, 4, 6], addTwo))

// Challenge 6
const reduce = (array, callback, initialValue) => {
  // let results = initialValue;
  
  // for (let i = 0; i < array.length; i++) {
  //   results = callback(results, array[i])
  // }
  // return results

  let results = initialValue

  array.forEach((x) => {
    results += x; 
  })

  return results
}

// const nums = [4, 1, 3];
// const add = (a, b) => { return a + b; }
// console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
const intersection = arrays => {
  // return result = arrays.reduce((a, b) => {
  //   a.filter(c => b.includes(c))
  // }) 

  // const results = []
  // const obj = {}

  // arrays.forEach((subArr) => {
  //   subArr.forEach((item) => {
  //       if (!obj[item]) {
  //           obj[item] = 1
  //       } else {
  //           obj[item] = obj[item] + 1
  //       }
  //   })
  // })

  // const objEntries = Object.entries(obj)
  
  // for (let i = 0; i < objEntries.length; i++) {
  //   if (objEntries[i][1] === arrays.length) {
  //       results.push(+objEntries[i][0])
  //   }
  // }

  // return results
  
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
const union = arrays => {
  // const merge = []
  // /* 
  //   [
  //     5, 10,  15, 15, 88, 1,
  //     5,  7, 100, 15, 10, 1,
  //     5
  //   ]
  // */

  // for (let i = 0; i < arrays.length; i++) {
  //   arrays[i].forEach((x) => {
  //     if (!merge.includes(x)) {
  //       merge.push(x)
  //     }
  //   })
  // }

  // return merge.sort((a, b) => { // this returns the nums in array in numerical order
  //   return a - b
  // })

  // return merge


  // arrays.reduce((previousVal, currentValue, currentIndex, arrayReadOnly) => {
    
  // })
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
const objOfMatches = (array1, array2, callback) => {
  const obj = {}

  array1.forEach((x) => {
    array2.forEach((y) => {
      if (!obj[x]) {
        if (callback(x) === y) {
          obj[x] = y
        }
      }
    })
  })
  return obj
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
const multiMap = (arrVals, cb) => {
  const obj = {}

  arrVals.forEach((x) => {
    const arr = []
    for (let i = 0; i < cb.length; i++) {
      arr.push(cb[i](x))
    }
    if (!obj[x]) {
      obj[x] = arr
    }
  })

  return obj
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
const objectFilter = (obj, cb) => {
  const results = {}

  for (let key in obj) {
    if (!results[key] && cb(key) === obj[key]) {
      results[key] = cb(key)
    }
  }

  return results
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// // console.log(objectFilter(cities, city => city.toUpperCase())) 
// console.log(objectFilter(cities, (city) => {
//   return city.toUpperCase()
// }))
// Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
const majority = (array, cb) => {
  let trueCount = 0;

  array.forEach((x) => {
    if (cb(x)) {
      trueCount = trueCount + 1
    }
  })

  return (trueCount > (array.length / 2))
}

// const isOd = num => { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOd)); // should log: false


// Challenge 13
const prioritize = (array, cb) => {
  const results = []
  const rejects = []

  array.forEach((x) => {
    if (cb(x)) {
      results.push(x)
    } else {
      rejects.push(x)
    }
  })

  return results.concat(rejects)
}

const startsWithS = str => { 
  return str[0] === 's' || str[0] === 'S'; 
};
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); 
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
const countBy = (array, cb) => {
  let obj = {}

  array.forEach((item) => {
    if (!obj[cb(item)]) {
      obj[cb(item)] = 1
    } else {
      obj[cb(item)] = obj[cb(item)] + 1;
    }
  })

  return obj
}

// console.log(countBy([1, 2, 3, 4, 5], num => {
//   if (num % 2 === 0) return 'even';
//   else return 'odd';
// })); 
// console.log(countBy(['heads', 'tails', 'heads', 'heads'], (str) => {
//   return str
// }))
// should log: { odd: 3, even: 2 }


// Challenge 15
const groupBy = (array, cb) => {
  const obj = {}
  /* 
  {
    1: [1.3],
    2: [2.1].concat[]
  }
  */

  array.forEach((x) => {
    
    if (!obj[cb(x)]) {
      obj[cb(x)] = [x]
    } else {
      obj[cb(x)] = obj[cb(x)].concat([x])
    }
  })

  return obj
}

// const decimals = [1.3, 2.1, 2.4];
// const floored = num => { 
//   return Math.floor(num); 
// };
// console.log(groupBy(decimals, floored)); 
// should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
const goodKeys = (obj, cb) => {
  let results = []

  for (let key in obj) {
    if (cb(obj[key])) {
      results.push(key)
    }
  }
  return results
}

// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = str => { 
//   return str.slice(0, 4).toLowerCase() === 'bird'; 
// };
// console.log(goodKeys(sunny, startsWithBird)); 
// should log: ['charlie', 'dee']


// Challenge 17
const commutative = (cb1, cb2, x) => {
  return cb1(cb2(x)) === cb2(cb1(x))
}

// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
const objFilter = (obj, cb) => {
  let results = {}

  for (let key in obj) {
    if (cb(key) === obj[key]) {
      results[key] = obj[key]
    }
  }
  return results
}

// const startingObj = {}; // { 6 : 3, 2 : 1, 12 : 4, }
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); 
// should log: { 2: 1, 6: 3 }


// Challenge 19
const rating = (arrOfFuncs, value) => {
  
  const truthCount = arrOfFuncs.reduce((count, cb) => { 
    if (cb(value)) {
      return count + 1;
    }
    return count
  }, 0) 

  return (truthCount / arrOfFuncs.length) * 100
}

const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
const pipe = (arrOfFuncs, value) => {
  return arrOfFuncs.reduce((acc, cur) => { 
    return cur(acc), value
  }) 
}

const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); 
// should log: 'CATcatCATcat'


// Challenge 21
const highestFunc = (objOfFuncs, subject) => { // {double, addTen, inverse}, 5
  let results = {} // double: 10, addTen: 15, inverse: -5
  
  for (let key in objOfFuncs) {
    results[key] = objOfFuncs[key](subject)
  }

  return Object.keys(results).reduce((acc, cur) => { 
    if (results[acc] > results[cur]) {
        return acc
    } else {
      return cur
    }
    // return results[acc] > results[cur] ? acc : cur 
  })
}

const groupOfFuncs = {};
/* groupOfFuncs = {
  double : (x) => { return x * 2 },
  addTen : (x) => { return x + 10 },
  inverse : (x) => { return x * -1 }
}
 */
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
const combineOperations = (startVal, arrOfFuncs) => { 
// startVal = 0 ; arrOfFuncs = [add100, divByFive, multiplyByThree]
let results = startVal;

// for (let i = 0; i < arrOfFuncs.length; i++) {
//   results = arrOfFuncs[i](results)
// }

arrOfFuncs.reduce((acc, cur, idx) => {
  results = cur(results)
}, results)

return results
}

const add100 = num => {
  return num + 100;
}
const divByFive = num => {
  return num / 5;
}
const multiplyByThree = num => {
  return num * 3;
}
const multiplyFive = num => {
  return num * 5;
}
const addTen = num => {
  return num + 10;
}

// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
const myFunc = (array, cb) => {

  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return i
    }
  }
  return -1
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

const isOdd = num => {
  return (num % 2 !== 0);
}

// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
const myForEach = (array, cb) => {
  let results = sum;

  for (let i = 0; i < array.length; i++) {
    results = results + cb(array[i])
  }

  return results
}

let sum = 0;

const addToSum = num => {
  sum += num;
}

const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); 
// Should output 6