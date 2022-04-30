function isPalindrom(word) {
  return word === word.split('').reverse().join('');
}

console.log(isPalindrom('ohoho')); //true
