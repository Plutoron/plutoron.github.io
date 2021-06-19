const getIndex = (source, target) => {
  let min = 0
  let max = source.length - 1

  while (min <= max) {
    const mid = Math.floor((max + min) / 2) 

    if (source[mid] === target) return mid

    if (source[mid] > target) {
      max = mid - 1
    } 

    if (source[mid] < target) {
      min = mid + 1
    }
  }
}

console.log(getIndex([1,2,3,5,5,5,5,5,6,7], 5))
console.log(getIndex([3,3,4,6,7,8,9,10], 6))