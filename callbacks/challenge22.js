// Challenge 22
const combineOperations = (startVal, arrOfFuncs) => { 
// startVal = 0 ; arrOfFuncs = [add100, divByFive, multiplyByThree]
let results = 0;
arrOfFuncs.reduce((acc, cur) => {
  // acc = startVal => acc = 0 ; cur = arrOfFuncs[0] => [add100]
  console.log( acc )
  results = acc + results // results = 0 + 
  return acc = acc + cur(acc)

}, startVal)

console.log(results)
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

console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10