var foo = function(...args) {
  const fn = function(..._args) {
    const params = [...args, ..._args]
    return foo(...params)
  }

  fn.getValue = function() {
    return args.reduce((pre, v) => {
      return pre += v
    }, 0)
  }

  return fn
}


var f1 = foo(1,2,3); 
console.log(f1.getValue()); // 6 输出是参数的和
var f2 = foo(1)(2,3); 
console.log(f2.getValue()); // 6
var f3 = foo(1)(2)(3)(4); 
console.log(f3.getValue()); // 10