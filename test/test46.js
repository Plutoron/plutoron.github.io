// 输入：[1, 2, 4, 8] 输出：7

// 输入：[8, 1, 2, 4] 输出：3

const getMax = (source) => {
  let max = 0

  let minIndex = 0

  for (let i = 0; i < source.length; i++) {
    const diff = source[i] - source[minIndex]

    if (diff > max) {
      max = diff
    }

    if (diff < 0) {
      minIndex = i
    }
  }

  return max
}

console.log(getMax([1, 2, 4, 8]))
console.log(getMax([8, 1, 2, 4]))