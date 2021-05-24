// input [1,2,3,5,7,8, 10]
// output '1~3', 5, '7~8', 10

const format = (arr) => {
  let last = 0
  return arr.reduce((pre, v, i) => {
    if (i === 0) {
      last = v
      return `${v}`
    }

    if (last + 1 === v) {
      if (pre.endsWith(`~${last}`)) {
        pre = pre.replace(`~${last}`, `~${v}`)
      } else {
        pre = `${pre}~${v}`
      }
    } else {
      pre = `${pre},${v}`
    }

    last = v

    return pre
  }, '')
}

console.log(format([1,2,3,5,7,8, 10]))