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

const find = (value, target) => {
  let res = []
  const getId = (item, parents) => {
    if (item.id === value) {
      res = parents
      return
    }

    if (item.children) {
      item.children.map((v) => {
        getId(v, [...parents, item.id])
      })
    }

    return [...parents, item.id]
  }

  target.map((v) => {
    getId(v, [])
  })

  return res
}

console.log(find('122', data))
console.log(find('111', data))