const getPosition = (source, target) => {
  const res = target.split(source)
  let sLen = source.length

  console.log(res)
  console.log('出现了', res.length - 1, '次')
  let preLen = 0
  res.reduce((pre, v, i) => {
    if (i === res.length - 1) return pre
    console.log('第', i + 1, '次', preLen + v.length)

    preLen += (v.length + sLen)

    pre.push(preLen)

    return pre
  }, [])
}

const getPosition2 = (source, target) => {
  const sLen = source.length
  const tLen = target.length

  const position = []

  let current = 0

  let s_start = 0

  let match = false

  for (let i = 0; i < tLen; i++) {
    if (!match) {
      if (target[i] === source[0]) {
        current = i
        s_start = 1
        match = true
      }
    } else {
      if (target[i] === source[s_start]) {
        if (s_start === sLen - 1) { 
          position.push(current)
          s_start = 0
          match = false
        }
      } else {
        match = false
        s_start = 0
      }
    }
  }

  console.log(position)
}

console.log(getPosition('44', '123444455446644'))
console.log(getPosition2('44', '123444455446644555'))