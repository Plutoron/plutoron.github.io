var maxSubArray = function(nums) {
  let pre = 0
  let max = nums[0]

  nums.forEach((num)=>{
    // 获取 最大值 作为 上个和
    pre = Math.max(num,pre + num)
    max = Math.max(max,pre)
  })
  return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))