class Solution:
  def longestPalindrome(self, s: str) -> str:
    max = 0
    mid = int(s.__len__() / 2)

    for index, v in enumerate(s):
      _range = index if index < mid else s.__len__() - mid
      pre = ''
      after = ''
      length = 0

      # 中间对称
      for cursor in range(index):
        cursor = cursor + 1
  
        outRight = index - cursor < 0
        outLeft = index + 1 + cursor > s.__len__()

        if (not outLeft) and (not outRight):
          pre = s[(index - cursor):index]
          after = s[(index + 1): (index + 1 + cursor)]

          print(pre, after)

      # 镜像对称
      for cursor in range(index):
        cursor = cursor + 1
  
        outRight = index - cursor < 0
        outLeft = index + 2 + cursor > s.__len__()

        if (not outLeft) and (not outRight):
          pre = s[(index - cursor):(index + 1)]
          after = s[(index + 1): (index + 2 + cursor)]

          print(pre, after)




    

longestPalindrome = Solution().longestPalindrome('abcbc')

print(longestPalindrome)

print('sss'[1:2])