function trim(str, direction) {
  const arr = str.split(' ')

  console.log(arr)

  const dealPre = (target) => {
    let result = ''
    target.reduce((pre, v) => {
      if (v) pre = true
      if (pre) result=`${result ? result + ' ' : result}${v}`

      return pre
    }, false)

    return result
  }

  const dealAfter = (target) => {
    let result = ''
    target.reduceRight((pre, v) => {
      if (v) pre = true
      if (pre) result=`${result ? result + ' ' : result}${v}`

      return pre
    }, false)

    return result.split('').reverse().join()
  }

  switch (direction) {
    case 'pre': 
      return dealPre(arr)
    case 'after':
      return dealAfter(arr)
  }
}
var result = trim(' hello world, I am keke. ', 'pre');
var result2 = trim('  helloworld, I am keke. ');
console.log(result); // helloworld,Iamkeke. 
console.log(result2); // helloworld,Iamkeke. 