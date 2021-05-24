class Solution:
  def isPalindrome(self, x: int) -> bool:
    if x < 0:
      return False

    _list = list(str(x))
    _r_list = list(str(x))
  
    _r_list.reverse()

    str1 = ''.join(x for x in _list)
    str2 = ''.join(x for x in _r_list)
  
    return str1 == str2

isPalindrome1 = Solution().isPalindrome(121)
isPalindrome2 = Solution().isPalindrome(-121)
isPalindrome3 = Solution().isPalindrome(10)

print(isPalindrome1)
print(isPalindrome2)
print(isPalindrome3)