var longestPalindrome = function(s) {
  var max = 0
  var mid = parseInt(s.length / 2)

  s.split('').map((v, index) => {
    // 判断 是前半部分 还是 后半部分
    var range = index > mid ? s.length - index : index 
    
    let pre // 前部分
    let after // 后部分
    let length // 字符串长度

    // 中间 字母对称
    for (let i = range;i >= 0 ;i -- ) {
      var outLeft = index - i < 0
      var outRight = index + 1 + i > s.length

      if (!outLeft && !outRight) {
        pre = s.slice(index - i, index)
        after = s.slice(index + 1, index + 1 + i)
  
        if (pre && after && pre === after.split('').reverse().join('')) {
          length = pre.length * 2 + 1
          max = length > max ? length : max
        }
      }   
    }

    // 镜像
    for (let i = range;i >= 0 ;i -- ) {
      var outLeft = index - i < 0
      var outRight = index + 2 + i > s.length
      
      if (!outLeft && !outRight) {
        pre = s.slice(index - i, index + 1)
        after = s.slice(index + 1, index + 2 + i)
  
        if (pre && after && pre === after.split('').reverse().join('')) {
          length = pre.length * 2
          max = length > max ? length : max
        }
      }
    }
  })

  return max
};
console.log(longestPalindrome('xxxxxixxxxx'))