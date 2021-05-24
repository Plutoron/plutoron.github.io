var entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

// 要求转换成如下对象
// var output = {
//   a: {
//    b: {
//      c: {
//        dd: 'abcdd'
//      }
//    },
//    d: {
//      xx: 'adxx'
//    },
//    e: 'ae'
//   }
// }

  const format = (obj) => {
    const setKeyValue = (keyArr, source, value) => {
      const key = keyArr[0]

      if (keyArr.length === 1) {
        source[key] = value
        return 
      }

      if (!source[key]) {
        source[key] = {}
      }

      setKeyValue(keyArr.slice(1), source[key], value)
    }

    return Object.keys(obj).reduce((pre, v) => {
      setKeyValue(v.split('.'), pre, obj[v])
      return pre
    }, {}) 
  }

  console.log(format(entry))