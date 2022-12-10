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