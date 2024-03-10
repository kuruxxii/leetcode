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
