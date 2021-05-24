function sum(...nums) {
  function fn(...args) {
    if (args.length === 0) {
      return nums.reduce((pre, v) => {
        return (pre + v)
      }, 0)
    }
    const params = [...nums, ...args]
    return sum(...params)
  }

  fn.toString = function() {
    return nums.reduce((pre, v) => {
      return (pre + v)
    }, 0)
  }

  fn.valueOf = function() {
    return nums.reduce((pre, v) => {
      return (pre + v)
    }, 0)
  }

  return fn
}

console.log(+sum(1)(2)(3,4))
console.log(sum(1)(2)(3,4)())
console.log(sum(1)(2)(3,4))