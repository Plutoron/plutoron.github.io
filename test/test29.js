Array.prototype._splice = function(start, deleteCount, ...items) {
  console.log(this)
  const result = []

  let index

  if (start >= 0) index = start

  if (start < 0) {
    index = this.length + start < 0 ? 0 : this.length + start
  }

  deleteCount = typeof deleteCount !== undefined ? deleteCount : this.length

  items = items.length ? items : []
  
  // 单纯插入
  if (start >= this.length) {
    this.concat(items)
    return []
  }

  /**
   * 思路
   * 先把原数组值取出，原数组清空
   * 先入栈不需要处理的数组前部分元素
   * 然后把需要加入的args
   * 最后入栈数组后部分元素
   * 返回中间删掉的元素组成的数组
   */

  let arr = [...this]
  this.length = 0
  
  let i = 0

  while (i < start) {
    this.push(arr.shift())
    i++
  }

  items.forEach(item => this.push(item))

  arr.forEach((item, index) => {
    if (index >= deleteCount) {
      this.push(item)
      delete arr[index]
    }
  })

  return arr
}

console.log([1,2,3]._splice(4, 4, 4))