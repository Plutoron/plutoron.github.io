
// 例如：[10,21,0,-7,35,7,9,23,18] 输出5, 7最小

function getIndex(arr){
  let index=null;

  const len = arr.length

  let min

  for (let _index = 0;_index < len; _index++) {
    if (arr[_index] === 0 || arr[_index] < 0) continue

    if ((min && arr[_index] < min) || !min) {
      min = arr[_index] 
      index = _index
    }
  }

  return index;
}

console.log(getIndex([10,21,0,-7,35,7,9,23,18]))

