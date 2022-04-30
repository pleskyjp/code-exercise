// 2.3: is given word a palindrom?
// cte se pozpatku stejne

function isPalindrom(word) {
  return word === word.split("").reverse().join("")
}

console.log(isPalindrom("kobylamamalybok")); //true