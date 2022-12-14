// CHALLENGE 1
const createFunction = () => {
  return () => {
    console.log('hello')
  }
}

// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
const createFunctionPrinter = input => {
  return () => {
    console.log(input)
  }
}

// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.


// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


const addByX = (x) => {
  return (input) => {
    console.log(input + x)
  }
}

// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
const once = func => { 
  let firstRunFlag = false;
  let results;
  
  return num => {
    if (!firstRunFlag) {
      results = func(num)
      firstRunFlag = true;
    }

    return results
  }
}

const addByTwo = n => {
  return n + 2
}
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
const after = (count, cb) => { // count = 3 ; func = const called () { }
  let counter = 0;

  const runAfterFirstTime = () => {
    counter++
    counter === count ? cb() : runAfterFirstTime
    // if (counter === count) {
    //   cb()
    // }
  }
  return runAfterFirstTime
}

const called = () => { 
  return console.log("hello") 
};

// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
const delay = (cb, wait) => { 
  return () => { return setTimeout(cb, wait) }
}

// let count = 0;
// const delayedFunc = delay(() => count++, 1000); 
// delayedFunc()
// console.log(count)                          // should print '0'
// setTimeout(() => console.log(count), 1000)  // should print '1' after 1 second                  


// CHALLENGE 7
const rollCall = names => {
  let count = 0;
  return  () => {
    if (count >= names.length) {
        return console.log("Everyone accounted for")
    }
    console.log(names[count])
    return count++
  }
}

// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
const saveOutput = (cb, pw) => {
  const results = {};

  const cbAndResults = num => {
    if (num !== pw) {
      results[num] = cb(num)
      return results[num]
    } else {
      return results
    }
  }
  return cbAndResults;
}

// const multiplyBy2 = num => { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
const cycleIterator = array => {
  let count = 0

  return () => array[count++ % array.length];
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
const defineFirstArg = (cb, arg) => {

  const cbSubFrom20 = input => {
    return cb(arg, input)
  }
  return cbSubFrom20
}

const subtract = (big, small) => { 
  return big - small; 
};
const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
const dateStamp = cb => {
  const results = {}

  const cbAndStampedMultBy2 = input => {
    results['date'] = new Date()
    results['output'] = cb(input)

    return results
  }

  return cbAndStampedMultBy2 //innerFunction
}

const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
const censor = () => {
  const results = {}
  /* results = {
    'dogs' : 'cats',
    'quick' : 'slow',
  } 
  */

  const emptyAndCensor = (...inputs) => {
    if (inputs.length === 2) {
      results[inputs[0]] = inputs[1]
    } else if (inputs.length === 1) {
      let resultString = inputs[0]
      for (let key in results) {
        resultString = resultString.replace(key, results[key])
      }
      return resultString
    }
  }
  return emptyAndCensor
}

const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
const createSecretHolder = secret => { // 5
  let results = secret // results = 2

  return {
    getSecret: () => {
      return results
    },
    setSecret: (input) => {
      results = input
    }   
  }
}

const obj = createSecretHolder(5)
obj.getSecret() // => returns 5
// console.log(obj.getSecret()) // This was missing from excercise 
obj.setSecret(2)
obj.getSecret() // => returns 2
// console.log(obj.getSecret()) // This was missing from excercise 



// CHALLENGE 14
const callTimes = () => {
  let counter = 0;

  const innerFunc = () => {
    counter++
    console.log(counter)
    return counter
  }
  
  return innerFunc
}

// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
const roulette = num => {
  let count = 0;
  const innerFunc = () => {
    count++
    if (count < num) {
      return 'spin'
    } else if (count === num) {
      return 'win'
    } else {
      return 'pick a number to play again'
    }
  }
  return innerFunc
}

const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
const average = () => {
  let total = 0;
  let counter = 0; 

  const innerFunc = input => {
    if (input === undefined) {
      if (counter === 0) {
        return 0
      } else {
        return total / counter;
      }
    }
    counter++
    total += input;
    return total / counter;
  }
  return innerFunc
}

const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
const makeFuncTester = arrOfTests => {
  return (cb) => { 
    return arrOfTests.every((couple) => cb(couple[0]) === couple[1]);
  }
}

const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
/*
  const shouldCapitalizeLast = (cb) => { // 
    return arrOfTests.every((couple) => cb(couple[0]) === couple[1]);
  }
*/

// [
//   [ 'hello', 'hellO' ],
//   [ 'goodbye', 'goodbyE' ],
//   [ 'howdy', 'howdY' ]
// ]
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
const makeHistory = limit => {
  return (str) => {

  }
}

// const myActions = makeHistory(2);
/*
  
*/

// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

const addNum = num => {
  return (oneArg) => {
    return num + oneArg
  }
}

const fifteen = addNum(10);

console.log(fifteen(5)) //15

// CHALLENGE 19
const blackjack = array => {

}

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
