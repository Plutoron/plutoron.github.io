// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

const getValue = (str) => {
  const arr = str.split('[')
  const result = {}
  let curTarget = result

  if (arr.length === 1) return { value: arr[0] }

  arr.map((v, i) => {
    if (i === arr.length - 1) {
      curTarget['value'] = v.split(']')[0]
      return
    }

    if (v) {
      curTarget['value'] = v
      
      curTarget['children'] = {}

      curTarget = curTarget['children']
    }
  })

  return result
}

console.log(getValue('abc'))
console.log(getValue('[abc[bcd[def]]]'))