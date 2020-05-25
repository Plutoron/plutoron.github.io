var findMedianSortedArrays = function(nums1, nums2) {
  // 判断奇偶
  var odd = (nums1.length + nums2.length) % 2 !== 0
  var _nums1 = [...nums1]
  var _nums2 = [...nums2]
  var mid = 0

  while(mid === 0){
    // 切分数组 分为 4部分 
    var nums1_slice_index = parseInt(_nums1.length / 2) 
    nums1_pre = _nums1.slice(0, nums1_slice_index)
    nums1_after = _nums1.slice(nums1_slice_index)

    var nums2_slice_index = parseInt(_nums2.length / 2) 
    nums2_pre = _nums2.slice(0, nums2_slice_index)
    nums2_after = _nums2.slice(nums2_slice_index)

    console.log('_nums1', _nums1)
    console.log('nums1_pre', nums1_pre)
    console.log('nums1_after', nums1_after)
    console.log('_nums2', _nums2)
    console.log('nums2_pre', nums2_pre)
    console.log('nums2_after', nums2_after)
    console.log('---------')

    if(nums1_after[0] < nums2_after[0]) {
      _nums2 = nums1_after
    } else {
      _nums2 = nums2_after
    }

    if (nums1_pre[nums1_pre.length - 1] > nums2_pre[nums2_pre.length - 1]) {
      _nums1 = nums1_pre
    } else {
      _nums1 = nums2_pre
    }

    // 如果是奇数
    if (odd) {
      if (_nums1.length + _nums2.length === 1) {
        mid = _nums1[0] || _nums2[0]
      }
    } else {
      if (_nums1.length + _nums2.length === 2) {
        mid = (_nums1[0] + _nums2[0]) / 2
      }
    }
  }

  return mid
};

findMedianSortedArrays([1,2, 3], [3 ,4, 5])