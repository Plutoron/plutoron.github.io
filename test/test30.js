const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}



function test() {
  // 同步输出 1 4 9
  // list.forEach(async x=> {
  //   const res = await square(x)
  //   console.log(res)
  // })

  // 串行 1 4 9
  list.reduce(async (_, x) => {
    await _
    const res = await square(x)
    console.log(res)
  }, undefined)  
}

// 串行 1 4 9
// async function test() {
//   for (let i = 0; i < list.length; i++) {
//     let x = list[i]
//     const res = await square(x)
//     console.log(res)
//   }
// }
test()