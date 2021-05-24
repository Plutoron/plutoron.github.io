const arr = Array.from({ length: 10000 }).map((v, i) => i + 1)
const getMirrorNum = (target) => {
  return target.reduce((pre, v) => {
    if (v > 10) {
      if (v.toString().split('').reverse().join('') === v.toString()) {
        pre.push(v)
      }
    }
    return pre
  }, [])
}

console.log(getMirrorNum(arr))