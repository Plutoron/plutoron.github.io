const a = (str) => {
  let i = 0

  while(i<= str.length - 1 - i) {
    if (str[i] !== str[str.length - 1 - i]) return false

    i++
  }

  return true
}
console.log(a('11aa'))
console.log(a('aa1a'))
console.log(a('a1a'))