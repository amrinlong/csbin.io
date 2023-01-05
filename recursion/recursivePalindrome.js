// Challenge 3
const palindrome = str => {
  
  let newStr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "")
  let firstChar = newStr[0]
  let lastChar = newStr.slice(-1)

  if (newStr.length <= 1) {
    return console.log('true')
  } else {
    if (firstChar === lastChar) {
      palindrome(newStr.slice(1, -1))
    } else {
      return console.log('false')
    }
  }
}

console.log(palindrome("Janaj"));
console.log(palindrome("An-a"));
console.log(palindrome("Anna"));
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false