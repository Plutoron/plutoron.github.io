// 提供一个异步 add 方法如下，需要实现一个 await sum(...args) 函数：

// function asyncAdd(a, b, callback) {
//   setTimeout(function () {
//     callback(null, a + b);
//   }, 1000);
// }

function asyncAdd(a, b, callback) {
  setTimeout(function() {
    callback(null, a + b)
  }, 1000)
}

function add(a, b) {
  return new Promise((resolve, reject) => {
    asyncAdd(a, b, (_, sum) => resolve(sum))
  })
}

function sum(...nums) {
  return new Promise((resolve, reject) => {
    nums.reduce(async (pre, v) => {
      return pre.then(total => add(total, v))
    }, Promise.resolve(0)).then(resolve)
  })
}


async function test() {
  const res = await sum(1,3,3,4,4,5)

  console.log(res)

  return res
}

console.log(test())
