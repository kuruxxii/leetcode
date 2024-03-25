/*
The key idea behind this solution is that for each number nums[i] in the array,
it checks if the complement: target - nums[i] has already been encountered before.
Think about this case: target = 6, nums = [3, 3] to help understanding.
If it has, then nums[i] and the previously encountered number sum up to the target.
*/

function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
}
