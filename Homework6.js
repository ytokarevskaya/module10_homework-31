const allEqual = arr => arr.every(val => val === arr[0]);

const result = allEqual([ 1, 1, 1, 1, 1])

console.log(result)