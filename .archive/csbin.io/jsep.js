// /* ========== *
// * Challenge 1 *
// * =========== */

// //Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = "Amrin" //add your name here
// console.log(typeof myVar === "string")


// /* ========== *
// * Challenge 2 *
// * =========== */


// const buildSentence = (word1, word2, word3) => {
//   const capLetter = word1[0].toUpperCase()
//   const remaining = word1.slice(1)
//   return console.log(capLetter + remaining + " " + word2 + " " + word3 + ".")
// }

// console.log("Challenge 2 Results")
// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."


// /* ========== *
// * Challenge 3 *
// * =========== */


// function lastLetter(word) {
//   return console.log(word[word.length - 1])
// }

// console.log("Challenge 3 Results")
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


// /* ========== *
// * Challenge 4 *
// * =========== */


// function buildGreeting(time, name) {
//   if (time > 0 && time <= 11) {
//     console.log(`Good Morning, ${name}!`)
//   } else if (time >=12 && time <= 16) {
//     console.log(`Good Afternoon, ${name}!`)
//   } else if (time >= 17 && time <= 23) {
//     console.log(`Good Evening, ${name}!`)
//   } else {
//     console.log(`That's not a real time, ${name}. Maybe you need some sleep!`)
//   }

// }

// console.log("Challenge 4 Results")
// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


// /* ========== *
// * Challenge 5 *
// * =========== */

// const indexOf = (string1, string2) => {
//   const lowerString2 = string2.toLowerCase();
//   let results = -1;
//   const indexOfString2 = string1.indexOf(lowerString2)

//   if (indexOfString2 > results) {
//     results = indexOfString2
//   }
  
//   return results
// }

// console.log("Challenge 5 Results")
// console.log( indexOf("CodeSmith", "o") === 1 )
// console.log( indexOf("hello", "ll") === 2 )
// console.log( indexOf("zebra", "z") === 0 )
// console.log( indexOf("banana", "B") === 0 )


// /* ========== *
// * Challenge 6 *
// * =========== */


// const letterExists = (word, letter) => {
//   let flag = false

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       flag = true;
//     } 
//   }
//   return console.log(flag)
// }

// console.log("Challenge 6 Results")
// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


// /* =========== *
// * Challenge 7 *
// * ============ */


// const isPrime = number => {

//   for(let i = 2, s = Math.sqrt(number); i <= s; i++)
//         if (number % i === 0) 
//         return console.log(false); 
//     return console.log(number > 1);
// }

// console.log("Challenge 7 Results")
// isPrime(-7); // => false
// isPrime(2); // => true
// isPrime(11); // => true
// isPrime(15); // => false


// /* ========== *
// * Challenge 8 *
// * =========== */


// const range = (start, end) => {
//   if (start < end) {
//     for (let i = start; i <= end; i++) {
//       console.log(i)
//     }
//   }
//   return
// }

// console.log("Challenge 8 Results")
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>


// /* =========== *
// * Challenge 9 *
// * ============ */


// const myIndexOf = (array, ele) => {
//   let results = -1

//   if (!array) {
//     return console.log(results)
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === ele) {
//       results = i
//     }
//   }
//   return console.log(results)
// }
// console.log("Challenge 9 Results")
// myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
// myIndexOf(["a", "b", "c"], "a") //=> 0
// myIndexOf(["a", "b", "c"], "d") //=> -1


// /* =========== *
// * Challenge 10 *
// * ============ */

// const unique = array => {
//   let results = []
  
//   for (let i = 0; i < array.length; i++) {
//     if (!results.includes(array[i])) {
//       results.push(array[i])
//     }  
//   }
//   return console.log(results)
// }

// console.log("Challenge 10 Results")
// unique([1, 1, 2, 3, 3]) //=> [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) //=> ["a", "c", "aa", "b"]


// /* =========== *
// * Challenge 11 *
// * ============ */

// const longestWord = sentence => {
//   let sentenceArr = sentence.split(" ")
//   // console.log(sentenceArr)
//   let longest = 0;
//   let longestWord;

//   for (let i = 0; i < sentenceArr.length; i++) {
//     if (sentenceArr[i].length >= longest) {
//       longest = sentenceArr[i].length
//       longestWord = sentenceArr[i]
//     }
//   }
//   return longestWord
// }

// console.log("Challenge 11 Results")
// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


// /* =========== *
// * Challenge 12 *
// https://bobbyhadz.com/blog/javascript-remove-vowels-from-string
// * ============ */

// const disemvowel = string => {
//   const noVowels = string.replace(/[aeiou]/gi, '');
//   return noVowels
// }


// console.log("Challenge 12 Results")
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


// /* =========== *
// * Challenge 13 *
// * ============ */

// const divisibleByFivePairSum = array => {
//   let results = []

//   for (let i = 0; i < array.length; i++) { 
//     for (let j = i + 1; j < array.length; j++) { 
//       if ((array[i] + array[j]) % 5 === 0) { 
//         results.push([i, j])
//       }
//     }
//   }
//   return results
// }


// console.log("Challenge 12 Results")
// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


// /* =========== *
// * Challenge 14 *
// * ============ */

// const highestScore = students => {
//   let highScore = 0;
//   let firstNameInitial;
//   let lastNameInitial;
//   let studentID = 0;

//   for (let i = 0; i < students.length; i++) { // {name: 'Will Sentance', id: 128, score: -42}
//     // console.log(students[i].name)
//     if (students[i].score > highScore) {
//       highScore = students[i].score;
//       const [firstName, lastName] = students[i].name.split(' ');
//       firstNameInitial = firstName[0];
//       lastNameInitial =  lastName[0];
//       studentID = students[i].id;
//     }
//   }

//   return firstNameInitial + lastNameInitial + studentID;
// }


// console.log("Challenge 13 Results")
// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'


/* =========== *
// * Challenge 15 *
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-10.php
// * ============ */

const leastCommonMultiple = (num1, num2) => {
  let results;
  const multiplesOfNum1 = [] 
  const multiplesOfNum2 = [] 

  for (let i = num1; i <= num1 * num2; i += num1) {
      multiplesOfNum1.push(i)
  }

  for (let j = num2; j <= num1 * num2; j += num2) {
      multiplesOfNum2.push(j)
  }

  for (let x = 0; x < multiplesOfNum1.length; x++) {
      for (let y = 0; y < multiplesOfNum2.length; y++) {
          if (multiplesOfNum1[x] === multiplesOfNum2[y]) {
              results = multiplesOfNum1[x]
              return results
          }
      }
  }

}

console.log("Challenge 15 Results")
console.log(leastCommonMultiple(2, 3)); //=> 6
console.log(leastCommonMultiple(6, 10)); //=> 30 // [6, 12, 18, 24, 30, 36, 42, 48, 54, 60], [10, 20, 30, 40, 50, 60]
console.log(leastCommonMultiple(24, 26)); //=> 312

/* ========== *
* Extension 1 *
* =========== */

const arrayBuilder = count => {
  let results = []
  // let total = 0;

  if (Object.keys(count).length === 0) {
    return results
  }

  for (let key in count) {
    for (let i = 1; i <= count[key]; i++) {
      results.push(key)
    }
  }
  return results
}


//Uncomment the lines below to test your function:
console.log("Challenge 16 Results")
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []


/* ========== *
* Extension 2 *
* =========== */

const objectBuilder = count => {
  let resultsObj = {}
  let addByFive = 0;

  for (let i = 0; i <= count; i++) {
    if (i === 0) {
      resultsObj[i] = 0 
    }
    resultsObj[i] = addByFive
    addByFive += 5
  }
  return resultsObj
}

console.log("Challenge 17 Results")
console.log(objectBuilder(4)); //=> {
  // 0: 0,
  // 1: 5,
  // 2: 10,
  // 3: 15,
  // 4: 20,
// }
console.log(objectBuilder(0)); //=> { 0: 0 }


/* ========== *
* Extension 3 *
* =========== */

const secretCipher = (sentence, cipher) => {  // ("lqq me on flcebzzk", { l : "a", q : "d", z: "o"})
  let results = ""; 

  for (let i = 0; i < sentence.length; i++) {
    if (cipher.hasOwnProperty(`${sentence[i]}`)) {
      results = results + cipher[sentence[i]]
    } else {
      results = results + sentence[i]
    }
  }

  return results
}


//Uncomment the lines below to test your function:
console.log("Challenge 18 Results")
console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"


/* ========== *
* Extension 4 *
* =========== */

const passingStudents = students => {
	const filteredStudents = students.filter(studentObj => {
		const scores = studentObj.grades.map(({ score }) => score);
		const average = Math.floor(scores.reduce((result, score) => result + score) / scores.length);

		return average >= 70;
	});

	return filteredStudents.map(({name}) => name);
}

var students = [
    {
    "name": "Marco",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}],
    },
    {
    "name": "Donna",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
    },
    {
    "name": "Jukay",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
    }
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]



