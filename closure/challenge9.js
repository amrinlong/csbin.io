// CHALLENGE 9
const cycleIterator = arr => {
  let counter = 0; // 1

  const innerFunc = () => {
    counter++
    if (counter === arr.length + 1) { // 1 === 4
        counter = 1
    }

    return arr[counter - 1] // arr[0]
  }

  return innerFunc
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);

console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'