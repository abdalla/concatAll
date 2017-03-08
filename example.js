require('./index');

let crazyData = [1, 2, 3, [4,5], 6, 7, 8, [9,], [], [10, [11], [12]], 13, 14];

let result = crazyData.concatAll();

console.log(result);