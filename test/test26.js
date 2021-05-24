// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

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

console.log(getValue([1,2,3,5,5,5,5,5,6,7], 5))
console.log(getValue([3,3,4,6,7,8,9,10], 6))