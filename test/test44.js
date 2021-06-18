const climbStairs = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  let result = 0

  result = climbStairs(n - 1) + climbStairs(n - 2)

  return result
}

console.log(climbStairs(5))