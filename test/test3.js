const getArray = () => {
  const getNum = () => Math.floor(Math.random() * 100)
  return Array.from({ length: 10 }).map(v => {
    return getNum()
  }) 
}

const format = (source) => {
  const a = [...source].sort((a, b) => a - b)

  let index = 0
  let current

  return a.reduce((pre, v) => {
    const flag = Math.floor(v / 10)
    if (current === undefined) {
      current = flag
    }

    if (flag === current) {
      pre[index] = [...(pre[index] || []), v]
    } else {
      current = flag
      index++

      pre[index] = [v]
    }

    return pre
  }, [])
}

console.log(format(getArray()))