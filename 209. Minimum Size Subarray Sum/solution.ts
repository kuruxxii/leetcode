function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let left = 0,
    right = 0;
  let result = nums.length + 1;
  // move the right pointer first
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      // keep moving the left pointer until the subarray can't be shrunk any further.
      while (sum - nums[left] >= target) {
        sum -= nums[left];
        left++;
      }
      result = Math.min(right - left + 1, result);
    }
    right++;
  }
  return result === nums.length + 1 ? 0 : result;
}
