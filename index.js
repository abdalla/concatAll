Array.prototype.concatAll = function() {
	return this.reduce(
		(results, current) =>
			Array.isArray(current)
				? results.concat(current).concatAll()
				: (results.push(current), results),
		[]
	);
};
