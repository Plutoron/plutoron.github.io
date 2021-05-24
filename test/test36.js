const delTarget = (str, target) => {
  const index = str.lastIndexOf(target)

  if (index !== -1) {
    str.splice(index, 1)
  }

  return str
}

