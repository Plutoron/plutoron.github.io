// LeetCode 862. 和至少为 K 的最短子数组

// 输入：A = [1,2], K = 4
// 输出：-1

// 输入：A = [2,-1,2], K = 3
// 输出：3

function shortestSubarray(nums, k) {
  let stack = [0]

  let len = nums.length 

  let sums = [nums[0]]

  // 获取 每个索引 的 总和
  for (let i = 1; i < len; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }

  let ans = len

  for (let i = 1; i < len; i++) {
    while (stack.length !== 0 && sums[stack[0]] + k <= sums[i]) {
      ans = Math.min(ans, i - stack[0]);
      stack.shift();
    }

    while (stack.length !== 0  && sums[stack[stack.length - 1]] >= sums[i]) {
      stack.pop();
    }

    stack.push(i);
  }

  console.log(stack)
  console.log(ans)
}

console.log(shortestSubarray([2, -1, 2, -1, 4], 3))
console.log(shortestSubarray([1, 2, 1, 2, 2], 4))