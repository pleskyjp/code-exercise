//3.5: function returning Nth smallest element

const points2 = [5, 6, 3, 2, 1, 8, 4, 6, -2, 2, -55];

const getNthSmallest = (arr, n) => {
  return arr.sort((a, b) => a - b)[n - 1];
};

console.log(getNthSmallest(points2, 4)); //2
