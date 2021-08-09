// 输入：[1, 2, 4, 8] 输出：7

// 输入：[8, 1, 2, 4] 输出：3

const getMaxGap = (source) => {
  let max = 0

  let minIndex = 0

  for (let i = 0; i < source.length; i++) {
    const diff = source[i] - source[minIndex]

    // 升序 更新最大
    if (diff > max) {
      max = diff
    }

    // gap 更新 最小索引
    if (diff < 0) {
      minIndex = i
    }
  }

  return max
}

console.log(getMaxGap([1, 2, 4, 8]))
console.log(getMaxGap([8, 1, 2, 4]))