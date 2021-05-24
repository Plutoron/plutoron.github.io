// 一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；

// 最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；

// 问：原来那堆牌的顺序，用函数实现。


// 先 top 后 bottom
const getPre = (arr) => {
  const _arr = [...arr]
  const len = arr.length
  let isO = len % 2 === 0
  const res = []

  // 判断奇偶 确定 先 头部 还是 底部

  for (let index = 0; index < len; index++) {
    if (!_arr.length) return res

    if (isO) {
      res.push(_arr.pop())
    } else {
      res.push(_arr.shift())
    }

    isO = !isO
  }

  return res.reverse()
}

console.log(getPre([1,2,3,4,5,6,7,8,9,10,11,12,13]))
console.log(getPre([1,2,3,4,5,6,7,8,9,10,11,12,13,14]))