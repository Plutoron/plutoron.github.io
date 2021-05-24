const randomNum = () => Math.floor(Math.random() * 30 + 2)

const getArray = (array = []) => {
  let curRandom = randomNum()

  if (array.includes(curRandom)) return getArray(array)

  array.push(curRandom)

  if (array.length === 5) return array

  return getArray(array)
}

const source = Array.from({length: 31}).reduce((pre, v, index) => {
  pre.push(index + 2)
  return pre
}, [])

const getRandomNum = max => Math.floor(Math.random() * max)

const getArray2 = (array = []) => {
  let curIndex = getRandomNum(source.length - array.length)

  array.push(source[curIndex])

  source.push(source.splice(curIndex, 1))

  if (array.length === 5) return array

  return getArray2(array)
}

console.log(getArray())
console.log(getArray2())