// CHALLENGE 9
const cycleIterator = array => {
  let count = 0

  const cycle = () => {
    count++;
    return array[(count - 1) % array.length];
  }
  return cycle
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
