const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);

function findMinMax(arr) {
  const min = Math.min(arr);
  const max = Math.max(arr);
  return { min, max };
}

// Example usage:
console.log(findMinMax([3, 7, 1, 9, 2])); // Output: { min: 1, max: 9 }
