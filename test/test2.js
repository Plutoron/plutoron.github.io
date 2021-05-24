const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D', 'E']

const mix = (a, b) => {
  const _a = [...a]
  const _b = [...b]

  let a_index = 0 
  let b_index = 0 

  let res = []

  while(a_index < _a.length) {
    const cur_a = _a[a_index]
    const cur_b = _b[b_index]

    if (a_index === _a.length - 1) {
      res.push(cur_a)
      res = res.concat(_b.slice(b_index))

      break
    } 

    if (cur_a.startsWith(cur_b)) {
      res.push(cur_a)
    } else {
      res.push(cur_b)
      res.push(cur_a)

      b_index++
    }

    a_index++ 
  }

  return res
}

console.log(mix(arr1, arr2))