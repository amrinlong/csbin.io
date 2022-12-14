// CHALLENGE 8
const saveOutput = (cb, pw) => {
  let results = {}

  const cbAndResults = num => {
    if (num === pw) {
        return results
    } else {
        results[num] = cb(num)
        return results[num]
    }
  }
  return cbAndResults
}

const multiplyBy2 = num => { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }