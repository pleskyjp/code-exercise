// 3.1: sort array descending using compare func
let points = [5,6,3,2,1,8,4,6,-2,2,-1];

// b - a for descending
// a - b for ascending
points.sort((a,b) => b - a);

// metoda sort modifikuje puvodni pole
// The sort() method sorts the elements of an array in place
console.log(points); // [ 8, 6, 6, 5, 4, 3, 2, 2, 1, -1, -2 ]