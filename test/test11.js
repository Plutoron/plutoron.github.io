function Sum(x){
  let arr = Array(x)
  console.log(arr)
  let resultArr = [...arr,...arr,...arr,...arr,...arr,...arr,...arr]
  return resultArr.length
}

console.log(Sum(3))