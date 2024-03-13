/*
data analysis: The array is ordered, so the maximum value of the squared elements is either at the left end or the right end.
"left" points to the start of the array, "right" points to the end of the array.
*/

function sortedSquares(nums: number[]): number[] {
  let left: number = 0,
    right: number = nums.length - 1;
  let result: number[] = [];
  while (left <= right) {
    // we need left === right when we deal with the last two elements
    if (Math.abs(nums[left]) > nums[right]) {
      // more concise than nums[left] ** 2 > nums[right] ** 2
      result.unshift(nums[left] ** 2);
      left++;
    } else {
      result.unshift(nums[right] ** 2);
      right--;
    }
  }
  return result;
}
