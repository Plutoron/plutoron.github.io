
// 例如：[10,21,0,-7,35,7,9,23,18] 输出5, 7最小

function getIndex(arr){
  const len = arr.length
  let index= 0
  let min = arr[0]

  for (let _index = 1;_index < len; _index++) {
    if (arr[_index] <= 0) continue

    if (arr[_index] < min) {
      min = arr[_index] 
      index = _index
    }
  }

  return index;
}

console.log(getIndex([10,21,0,-7,35,7,9,23,18]))

