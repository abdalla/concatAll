[![Travis Build](https://travis-ci.org/abdalla/concatAll.svg?branch=master)](https://travis-ci.org/abdalla/concatAll)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
# concatAll
Array helper to concat arrays - convert a multidimensional array into a single dimensional array

### Installation
To install the stable version:
```
npm install concatAll --save
```

### How to use
Pretty simple

```
require('concatAll');
```

### Example
```
require('concatAll');

let crazyData = [1, 2, 3, [4,5], 6, 7, 8, [9,], [], [10, [11], [12]], 13, 14];

let result = crazyData.concatAll();

console.log(result);

//=> result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```
