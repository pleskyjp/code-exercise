//1.2: find median in sorted array

const input2 = [1, 2, 4, 6, 9, 11, 11, 12];
const input3 = [1, 2, 4, 6, 9, 11, 11, 12, 13];

const findMedian = (arr) => {
  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};

console.log(findMedian(input2)); // 7.5
console.log(findMedian(input3)); // 9
