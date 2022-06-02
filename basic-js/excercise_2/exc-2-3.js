//2.3: palindrom

const isPalindrom = (word) => {
  return word === word.split('').reverse().join('');
};

console.log(isPalindrom('ohoho')); //true
