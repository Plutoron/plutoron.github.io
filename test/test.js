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


class PopupBase {
  show = false

  constructor(priorty, group) {
    // 初始化 并且添加到 队列
    
    if (group) {
      window.popupStack.groups[group] = []
    }
  }

  open() {
    if (!window.popupStack.lock) {
      this.show = true
      window.popupStack.lock = true
    } else {
      this.judgeAction()
    }
  }

  close() {
    this.show = false

    
  }

  judgeAction() {
    
    if (window.popupStack)
    // 当前是否有显示中的popup 
    window.popupTaskLock
  }
}

window.popupStack = {
  lock: false,
  groups: {
    'A': [1, 2, 3],
  },
  tasks: {
    1: '',
    2: '',
    4: ''
  }
}