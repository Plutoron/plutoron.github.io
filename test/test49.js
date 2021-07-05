var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  var result = []

  for (let index = 0;index < nums.length;index++) {
    const e1 = nums[index]

    if (!result.some(v => v[0] === e1)) {
      var rest = nums.slice(index + 1)

      var left_cursor = 0
      var right_cursor = rest.length - 1
  
      while (left_cursor !== right_cursor && left_cursor < right_cursor) {
        var leftVal = rest[left_cursor]
        var rightVal = rest[right_cursor]
  
        // 判断加起来 大于小于 0
        var sum = e1 + rightVal + leftVal
        if (sum === 0) {
          result.push([e1, rightVal, leftVal])
  
          left_cursor = left_cursor + 1
          right_cursor = right_cursor - 1
        }
  
        if (sum > 0) {
          right_cursor = right_cursor - 1
        }
  
        if (sum < 0) {
          left_cursor = left_cursor + 1
        }
      }
    }
  }
  
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
