// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出

const multiRequest = (urls, maxNum) => {
  const result = []

  let curIndex = maxNum - 1

  const fatchUrl = (url) => new Promise((resolve) => {
    fatch(url).then((res) => {
      addTask()
      const index = urls.findIndex(v => v === url)
      result[index] = res
      resolve()
    })
  })

  const addTask = () => {
    fatchUrl(urls[curIndex])
    curIndex++
  }

  const initTask = () => {
    urls.splice(0, maxNum).map(url => {
      fatchUrl(url)
    })
  }  

  initTask()

  return result
}

