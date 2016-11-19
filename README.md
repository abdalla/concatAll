# concat-all
Array helper to concatAll

### Installation
To install the stable version:
```
npm install concat-all --save
```

### How to use
Pretty simple

Import concat-all

```
let concatAll  = require('concatAll');
```

### Example
```
let concatAll  = require('concatAll');

let crazyData = [1, 2, 3, [4,5], 6, 7, 8, [9,], [], [10, [11], [12]], 13, 14];

let result = crazyData.concatAll();

console.log(result);

//=> result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

```
