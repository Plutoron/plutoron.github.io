const deepCopy = (target) => {
  if (typeof target !== 'object') return target
  
  const source = Array.isArray(target) ? [] : {}

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (typeof target[key] === 'object') {
        source[key] = deepCopy(target[key])
      } else {
        source[key] = target[key]
      }
    } 
  }

  return source
}

console.log(deepCopy([1,3,3,4,4,]))
console.log(deepCopy([1,3,3,4,{ a: 1 },3]))
console.log(deepCopy([1,3,[3,44,4, ],4,{ a: 1 },3]))
console.log(deepCopy({a: 1 , b: [1,3,44]}))
