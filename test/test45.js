Promise._all = function(promiseArr) {
  const res = []
  const len = promiseArr.length
  let flag = 0
  for (const key in promiseArr) {
    promiseArr[key].then(value => {
      res[key] = value
      flag++

      if (flag === len) {
        return new Promise((resolve) => {
          resolve(res)
        })
      }
    }).catch(e => {
      return new Promise((resolve, reject) => {
        reject(e)
      })
    })
  }
}