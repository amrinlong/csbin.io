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