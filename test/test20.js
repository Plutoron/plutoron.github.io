// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}

const getRepeateNum = (str) => {
  let last
  let num 
  let max = 0
  let result = {}
  str.split('').reduce((pre, v) => {
    if (v === last) {
      num++
    } else {
      num = 1
    }

    if (pre[v]) {
      if (pre[v] < num) {
        pre[v] = num
      }
    } else {
      pre[v] = 1
    }

    if (max < num) {
      result = {
        [v]: num
      }
      max = num
    } else if (max === num) {
      result[v] = num
    }

    last = v
    return pre
  }, {})

  return result
}

console.log(getRepeateNum('abcaakjbb'))
console.log(getRepeateNum('abbkejsbcccwqaa'))