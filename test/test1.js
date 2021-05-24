let a = {
  b: 2
}

const p = new Proxy(a, {
  set: (target, key, value) => {
    console.log(target, key, value)
    return false
    // throw 'constant'
  }
})

console.log(p)

p.b = 3

console.log(p)
