// 给定一个数组代表股票每天的价格，请问只能买卖一次的情况下，最大化利润是多少？日期不重叠的情况下，可以买卖多次呢？

// 输入: [100, 80, 120, 130, 70, 60, 100, 125]

// 1）只能买一次：65（60 买进，125 卖出）

// 2）可以买卖多次: 115（80买进，130卖出；60 买进，125卖出）

function test(nums) {
  let min = nums[0]
  let maxGap = 0
  // 存放 买入 卖出 差价
  let store = [0]

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i]

    if (min > current) {
      min = current
      store.push(0)
      continue
    }

    const gap = current - min
    maxGap = Math.max(maxGap, gap)
    store.push(gap)
  }

  // 多个 获取每个 正数 升序序列
  let sum = 0
  let pre = 0

  for (let i = 0; i < store.length; i++) {
    const current = store[i]

    // 从 0 开始 是 0 说明 新的交易开始
    if (current === 0) {
      sum+=pre
      pre = 0
    } 

    if (pre < current) {
      pre = current
    }
  }

  // 最后 一次加上
  sum += pre

  return sum
}

console.log(test([100, 80, 120, 130, 70, 60, 100, 125]))