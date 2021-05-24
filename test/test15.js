var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

  // 要求转换成如下对象
  // var output = {
  // 'a.b.c.dd': 'abcdd',
  // 'a.d.xx': 'adxx',
  // 'a.e': 'ae'
  // } 

  const format = (arr) => {
    const isValue = target => (typeof target === 'string')
    
    const result = {}

    const getValue = (source, pre = []) => {
      if (isValue(source)) {
        result[pre.join('.')] = source

        return
      }

      Object.keys(source).forEach(v => {
        getValue(source[v], [...pre, v])
      })
    }

    getValue(arr)

    return result
  }

  console.log(format(entry))