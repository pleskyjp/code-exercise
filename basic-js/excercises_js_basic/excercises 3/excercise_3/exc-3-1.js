var points = [5, 6, 3, 2, 1, 8, 4, 6, -2, 2, -1];

points.sort((a, b) => a - b).reverse();

console.log(points); // [ 8, 6, 6, 5, 4, 3, 2, 2, 1, -1, -2 ]
