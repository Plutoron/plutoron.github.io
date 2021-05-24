const u1 = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33'
const u2 = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33'
const u3 = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33'

const getElective = (url) => {
  const getParams = () => {
    const getQuery = (str) => str.split('?')[1]

    const queryStr = getQuery(url)
  
    const paramsArr = queryStr.split('&').reduce((pre, v) => {
      const [ key, value ] = v.split('=')
      pre[key] = value
  
      return pre
    }, {})

    return paramsArr
  }
  
  const { elective } = getParams(url)
  
  return elective ? elective.split(',') : []
}

console.log(getElective(u1))
console.log(getElective(u2))
console.log(getElective(u3))