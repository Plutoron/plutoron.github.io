const reverse = (target) => {
  const str = target.toString()

  if (str.length === 0) return str

  return `${reverse(str.slice(1))}${str[0]}`
}

console.log(reverse(123456))