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
  const incrementCounter = () => {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


const addByX = (x) => {

  return (input) => {
    console.log(x + input)
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
const once = cb => {
  let results = 0;
  let runFlag = false;

  

  return (input) => {
    if (!runFlag) {
      runFlag = true;
    }
    results = cb(input)
  }
}

// const onceFunc = once(addByTwo);

// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
const after = (count, cb) => {

  const innerFunction = () => {
    count--;
    if (count === 1) {
      cb()
    }
  }

  return innerFunction
}

const called = () => { 
  return console.log('hello') 
};
const afterCalled = after(3, called);

// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
const delay = (cb, wait) => {

  return () => {
    setTimeout(cb, wait)
  }
}

// let count = 0;
// const delayedFunc = delay(() => count++, 1000); 
// delayedFunc()
// console.log(count)                          // should print '0'
// setTimeout(() => console.log(count), 1000)  // should print '1' after 1 second              

// CHALLENGE 7
const rollCall = names => {
  let i = 0

  const innerFunc = () => {
    if (i < names.length) {
      console.log(names[i])
      i++
    } else if (i === names.length) {
      return console.log('Everyone accounted for')
    }
  }

  return innerFunc
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
const saveOutput = (cb, magicWord) => {
  let obj = {}

  const innerFunc = input => {
    // console.log(input)
    if (input === magicWord) {
      return obj
    } else {
      obj[input] = cb(input)
      return cb(input)
    }
  }

  return innerFunc
}

const multiplyBy2 = num => { 
  return num * 2; 
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
const cycleIterator = arr => {
  let counter = 0 // 4

  return () => {
    if (counter === arr.length) { // 4 === 4
      counter = 0;
    }
    counter++;
    return arr[counter - 1] // arr[3 - 1] => arr[2]
  }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);

console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
const defineFirstArg = (cb, arg) => {

  const innerFunc = (input) => {
    return cb(arg, input)
  }

  return innerFunc
}

const subtract = (big, small) => { 
  return big - small; 
};
const subFrom20 = defineFirstArg(subtract, 20);

// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
const dateStamp = cb => {

  const innerFunc = () => {

  }

  return innerFunc
}

const stampedMultBy2 = dateStamp(n => { 
  return n * 2
});

// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
const censor = () => {
  let objPair = {}
  let resultsStr = ''

  const innerFunc = (...inputs) => {
    console.log(inputs)
    console.log(inputs.length)

    if (inputs.length === 2) {
      objPair[inputs[0]] = inputs[1]
    } else if (inputs.length === 1) {
      console.log(objPair[inputs[0]])
      console.log(objPair[inputs[1]])
      resultsStr = resultsStr.replace(objPair[inputs[0]], inputs[1])
    }

  }

  return innerFunc
}

const changeScene = censor();

changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
const createSecretHolder = (secret) => {

}

// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {

}

// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {

}

// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {

}

// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  
}

// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {

}

// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {

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
