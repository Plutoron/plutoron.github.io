// 获取url里面的搜索参数
export const getSearchParam = search => search
  .replace('?', '')
  .split('&')
  .reduce((pre, v) => {
    const arr = v.split('=')
    pre[arr[0]] = decodeURIComponent(arr[1])

    return pre
  }, {})
  
// 获取url里面的搜索参数
export const getSearchParamFromHash = hash => (hash
    .split('?')[1] || '')
    .split('&')
    .reduce((pre, v) => {
        const arr = v.split('=')
        pre[arr[0]] = decodeURIComponent(arr[1])

        return pre
    }, {})

// 输入 66秒 返回 00:01:06
export const formatTime = time => {
    let t = Math.floor(time / 3600)
    let t1 = Math.floor((time % 3600) / 60)
    let t2 = Math.floor(time % 60)
    return `${t ? (t < 10 ? `0${t}` : t) : '00'}:${
        t1 ? (t1 < 10 ? `0${t1}` : t1) : '00'
    }:${t2 ? (t2 < 10 ? `0${t2}` : t2) : '00'}`
}

export const getUuid = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}