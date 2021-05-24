/* 洗牌算法：
    1.生成一个0 - arr.length 的随机数
    2.交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    3.生成一个0 - arr.length - 1 的随机数
    4.交换该随机数位置元素和数组的倒数第二个元素，并把该随机位置的元素放入结果数组
    依次类推，直至取完所需的10k个元素
*/

const getUnionNum = (arr, size) => {
  const result = []
  const _arr = [...arr]

  const len = arr.length

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * (len - i))
    console.log(randomIndex)
    const target = _arr[randomIndex]

    result.push(target)

    _arr[randomIndex] = _arr[len - i - 1]
    _arr[len - i - 1] = target
  }

  return result
}

console.log(getUnionNum(Array.from({length: 100}), 20))