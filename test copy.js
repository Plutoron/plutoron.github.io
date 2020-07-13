Function.prototype.myBind = function(context) {
  const _this = this

  const [source, ...rest] = [...arguments]

  const fn = function() {
    const _args = [...rest, ...arguments]

    const _source = this instanceof fn ? this : source

    return  _this.apply(_source, _args)
  }

  fn.prototype = _this.prototype

  return fn
}

Function.prototype.myCall = function(context) {
  context = context || window

  context.fn = this

  const [, ...args] = [...arguments]

  const result = context.fn(...args)

  delete context.fn 

  return result
}

Function.prototype.myApply = function(context) {
  context = context || window

  context.fn = this

  const [,rest] = [...arguments]

  const result = context.fn(...rest)

  delete context.fn

  return result
}

function debounce(fn, delay) {
  var timeout 

  return function(){
    const _this = this
    const args = [...arguments]

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(_this, ...args)
      timeout = null
    }, delay)
  }
}

function throllte(fn, delay) {
  var pre = Date.now()

  return function() {
    const args = [...arguments]
    const now = Date.now()

    if (now - pre < delay) return
    pre = now
    fn.apply(this, ...args)
  }
}


function a(s, x, y){
  const [,rest] = [...arguments]

  console.log(rest)
}

a(1)

a(1,2)
a(1,[2],3)



function sleep(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, delay)
  })
} 

async function test() {
  console.log('start', Date.now())
  await sleep(3000)
  console.log('end', Date.now())
}

test()


// 求数组最大深度
function depth(arr) {

  if (!Array.isArray(arr)) return 0

  let a = []

  arr.map(v => {
    a.push(depth(v))
  })

  let maxDepth = Math.max(...a)

  return maxDepth+1
}

console.log(depth([1,2,[4,[3]]]))


// 分饼干

function action(ask, need) {
  var can = 0

  var a1 = ask.sort((a, b) => b - a)
  var a2 = need.sort((a, b) => b - a)

  for (let index = 0; index < a1.length; index++) {
    const element = a1[index];

    if (element <= a2[0]) {
      can+=1
      a2.shift()
    }

    if (a2.length === 0) return can
  }

  return can
}

console.log(action([1,2,3,4,5], [1,1]))
console.log(action([1,2,3,4,5], [1,3]))
console.log(action([1,2,3,4,5], [1,3, 4]))

