const maxSubArray = (nums) => {
  if (nums && !nums.length) return 0
  
  const len = nums.length
  let store = [nums[0]]

  let max = 0
  let maxIndex = 0

  for (let i = 1; i < len; i ++) {
    const current = nums[i]
    const pre = store[store.length - 1]

    if (pre < 0) {
      store.push(current)
    } else {
      const sum = pre + current
      store.push(sum)

      if (sum > max) {
        max = sum
        maxIndex = i
      }
    }
  }

  let result = []

  for (let i = maxIndex; i > 0; i--) {
    if (store[i] < 0) return result

    result.unshift(nums[i])
  }

  return result
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))