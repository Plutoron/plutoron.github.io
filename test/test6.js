const arr = [0,1,0,3,12]
function zeroMove(array) {
  let len = array.length;
  let j = 0;
  for(let i=0;i<len-j;i++){
    if(array[i]===0){
        array.push(0);
        array.splice(i,1);
        i --;
        j ++;
    }
  }
  return array;
}

console.log(zeroMove(arr))
