Array.prototype.concatAll = function() {
  return this.reduce(function(results, current) {
    if(Array.isArray(current)) {
      return current.reduce(function(subArray, curr) {
        if(Array.isArray(subArray)) {
          return subArray.concat(curr)
        } else {
          return (subArray.push(curr), subArray)
        }
      }, results)
    } else {
      return (results.push(current), results)
    }
  }, [])
};
