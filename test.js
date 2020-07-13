function sum() {
  var args = arguments

  var fn = function() {
    _args = [...args, ...arguments]
    
    return fn
  }

  fn.toString = function() {
    return args.reduce((pre, value) => pre + value, 0)
  }

  return fn
}

console.log(sum(1)(2))