const data = [{
  id: '1',
  name: 'test1',
  children: [
    {
      id: '11',
      name: 'test11',
      children: [
        {
          id: '111',
          name: 'test111'
        },
        {
          id: '112',
          name: 'test112'
        }
      ]

    },
    {
      id: '12',
      name: 'test12',
      children: [
        {
          id: '121',
          name: 'test121'
        },
        {
          id: '122',
          name: 'test122'
        }
      ]
    }
  ]
}];


const find = (cache, f) => cache.filter(f)[0]

const deepCopy = (target, cache = []) => {
  if (target === null || typeof target !== 'object') return target

  const hit = find(cache, c => c.original === target)

  if (hit) return hit.copy

  const copy = Array.isArray(target) ? [] : {}

  cache.push({
    original: target,
    copy
  })

  Object.keys(target).forEach(key => {
    copy[key] = deepCopy(target[key], cache)
  })

  return copy
}

console.log(deepCopy(data))