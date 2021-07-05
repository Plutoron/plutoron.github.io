const lengthOfLIS = (source) => {
  if (source && !source.length) return 0
  
  const len = source.length
  let stack = [[source[0]]]

  let result = [1]
  let maxIndex = 0

  for (let i = 1; i < len; i ++) {
    let _store = [source[i]]

    for (let j = i - 1; j > 0; j--) {
      const top = _store[0]

      if (source[j] < top) {
        _store.unshift(source[j])
      }
    }

    stack.push(_store)
    result[i] = _store.length

    maxIndex = maxIndex < result[i] ? i : maxIndex
  }

  console.log(stack)
  console.log(result)
  console.log(maxIndex)
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(lengthOfLIS([10,9,2,5,3,7,101,6]))