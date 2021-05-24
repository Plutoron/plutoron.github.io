// input [123, "meili", "123", "mogu", 123]
// output [123, "meili", "123", "mogu"]

// input [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]
// output [123, [1, 2, 3], [1, "2", 3], "meili"]

// input [123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]
// output [123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]

// num === 
// string === 
// arr item === 
// obj key value === 

const slim = (arr) => {
  const map = new Map()

  const repeateIndex = []

  const isArrayEqual = (a, b) => {
    if (a.length !== b.length) return false

    a.forEach((v, i) => {
      if (!isEqual(v, b[i])) return false
    })

    return true
  }

  const isEqual = (a, b) => {
    const type = (typeof a)
    const _type = (typeof b)

    const staticType = ['number', 'string', 'undefined']

    if (type !== _type) return false

    if (a === null && b === null) return true

    if (staticType.includes(type)) return a === b 

    if (Array.isArray(a) !== Array.isArray(b)) return false

    if (Array.isArray(a)) {
      return isArrayEqual(a, b)
    }

    // 对象
    for (var key in a) {
      if (a.hasOwnProperty(key)) {
        if (!isEqual(a[key], b[key])) return false
      }
    }

    return true
  }

  return arr.reduce((pre, v, i, a) => {
    const type = (typeof v)

    if (repeateIndex.includes(i)) return pre

    if (v === null || ['string', 'number', 'undefined'].includes(type)) {
      if (map.has(v)) return pre
      map.set(v)
      pre.push(v)

      return pre
    }

    pre.push(v)

    // 处理 数组 & 对象
    if (Array.isArray(v)) {
      a.forEach((_v, _i) => {
        if (_i !== i) {
          if (isArrayEqual(_v, v)) {
            repeateIndex.push(_i)
          }
        }
      })
    } else {
      a.forEach((_v, _i) => {
        if (_i !== i) {
          if (isEqual(_v, v)) {
            repeateIndex.push(_i)
          }
        }
      })
    }

    return pre
  }, [])
}


console.log(slim([123, "meili", "123", "mogu", 123]))
console.log(slim([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]))
console.log(slim([123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]))