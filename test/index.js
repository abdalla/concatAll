import assert from 'assert';
import '../index.js';

describe('concatAll', () => {
	it('multidimensional array should be returned as a single dimensional array', () => {
		assert.deepEqual(
			[1, 2, 3, [4, 5], 6, 7, 8, [9], [], [10, [11], [12]], 13, 14].concatAll(),
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
		);
	});
});
