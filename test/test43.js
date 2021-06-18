// 反转链表

const reverseLinkedList = (source) => {
  let pre = source
  let current = pre.next

  while (current) {
    let _current = current.next

    current.next = pre
    pre = current

    current = _current
  }

  return pre
}

// 判断 链表 是否 有 环

const isRingLinkedList = (source) => {
  const set = new Set()
  let node = source
  while (node) {
    if (set.has(node)) return true 

    set.add(node)

    node = node.next
  }

  return false
}

// 链表 每 三个 反转 不足 三个 不反转

const reverseThreeLinkedList = (source) => {
  let pre = source
  let current = pre.next
  let next = current.next

  if (!pre || !current || !next) return source

  let _pre = next.next

  next.next = current
  current.next = pre
  pre.next = reverseThreeLinkedList(_pre)

  return next
}

// 链表 两两 反转

const reverseLinkedList = (source) => {
  let pre = source
  let current = source.next

  if (!pre || !current) return source

  let _pre = current.next
  current.next = pre
  pre.next = reverseLinkedList(_pre)
  return current
}

// 获取链表 倒数 n 个 元素

const getNLinkedList = (source, n) => {
  let result

  const getNumber = (current) => {
    if (current.next) {
      const _result = 1 + getNumber(current.next)

      if (_result === n) result = current
      return _result
    }

    return 0
  }

  getNumber(source)

  return result
}

// 合并两个有序链表

const mergeTwoLinkedList = (source1, source2) => {
  // 定义 一个 head
  let head = null
  let l1
  let l2

  // 获取 头节点
  if (source1 !== null && source2 !== null) {
    if (source1.val < source2.val) {
      head = source1
      l1 = source1.next
      l2 = source2
    } else {
      head = source2
      l1 = source1
      l2 = source2.next
    }
  }

  while (l1 !== null && l2!== null) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }

    head = head.next
  }

  if (l1 !== null) head.next = l1
  if (l2 !== null) head.next = l2

  return head.next
}

// 两数相加 

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

const addTwo = (l1, l2) => {
  if (l1 === null || l2 === null) {
    return l1 || l2
  }

  let _l1 = l1
  let _l2 = l2

  let result = function() {
    this.val = 0
    this.next = null
  }

  const sum = (...nums) => {
    const value = nums.reduce((pre, v) => pre + v)
    return [ Math.floor(value / 10), value % 10 ]
  } 

  const setResult = (extra, value) => {
    result.val = value
    result.next = function() {
      this.val = extra
      this.next = null
    }
  }

  while (_l1.next !== null && _l2.next !== null) {
    const [ extra, value ] = sum(result.val, _l1.val, _l2.val)
    setResult(extra, value)
    result = result.next

    _l1 = _l1.next
    _l2 = _l2.next
  }

  if (_l1 === null && _l2 === null) return result.next

  if (_l1 === null) {
    const [ extra, value ] = sum(result.val, _l2.val)
    setResult(extra, value)
  }

  if (_l2 === null) {
    const [ extra, value ] = sum(result.val, _l1.val)
    setResult(extra, value)
  }

  return result.next
}

```
二叉树：[3,9,20,null,null,15,7] ,

      3
    /   \
  9      20
       /    \
     15       7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
```

// 层级遍历

const levelOrderBFS = (root) => {
  const result = []
  const queue = []

  if (root !== null) queue.push(root)

  while (queue.length > 0) {
    let curLevelList = []
    let level = queue.length

    while (level > 0) {
      let node = queue.pop()
      curLevelList.push(node.val)
      levle--

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    } 

    result.push(curLevelList)
  }

  return result
}

const levelOrderDFS = (root) => {
  const result = []

  const depthFirst = (node, level) => {
    if (node === null) return
    result[level] = result[level] || []

    result[level].push(node.val)
    
    depthFirst(node.left, level + 1)
    depthFirst(node.right, level + 1)
  }

  depthFirst(root, 0)

  return result
}