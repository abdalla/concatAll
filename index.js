Array.prototype.concatAll = function() {
  return this.reduce((results, current) => {
    if(Array.isArray(current)) {
        return results.concat(current).concatAll();
    } else {
        return (results.push(current), results);
    }
  }, []);
};
