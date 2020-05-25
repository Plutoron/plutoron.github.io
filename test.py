class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    list = []
    max = 0
    for index in range(s.__len__()):
      cur_s = s[index]
      try:
        list = list[list.index(cur_s) + 1:]
      except:
        pass
      list.append(cur_s)
      max = len(list) if len(list) > max else max

      print(list)
    return max

lengthOfLongestSubstring = Solution().lengthOfLongestSubstring('asfgt')

print(lengthOfLongestSubstring)