// 反转链表
var reverseList = function (head) {
  if (!head || !head.next) return head;

  let cur = head;
  let pre = null;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};