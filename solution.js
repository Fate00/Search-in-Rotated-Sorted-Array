/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0, right = nums.length - 1;
    
    while (left + 1 < right) {
        var mid = parseInt(left + (right - left) / 2);
        if (nums[mid] === target) 
            return mid;
        else if (nums[mid] > nums[right]) {
            if (nums[mid] > target && target >= nums[left])
                right = mid;
            else
                left = mid;
        } else {
            if (nums[mid] < target && target <= nums[right])
                left = mid;
            else
                right = mid;
        }
    }
    
    if (nums[left] === target)
        return left;
    else if (nums[right] === target)
        return right;
    else
        return -1;
};