# concatAll
Just a simple way to create a concatAll for arrays

### Example
```
var crazyData = [1, 2, 3, [4,5], 6, 7, 8, [9,], [], [10, [11], [12]], 13, 14];

var result = crazyData.concatAll();

//=> result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

```
