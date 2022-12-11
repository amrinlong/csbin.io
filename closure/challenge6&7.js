// CHALLENGE 6
const delay = (cb, wait) => { 
  
}

let count = 0;
const delayedFunc = delay(() => count++, 1000); 
delayedFunc()
console.log(count)                          // should print '0'
setTimeout(() => console.log(count), 1000)  // should print '1' after 1 second                  


// CHALLENGE 7
const rollCall = names => {
  
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'