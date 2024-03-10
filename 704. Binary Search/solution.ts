function search(nums: number[], target: number): number {
  let low = 0,
    high: number = nums.length - 1;
  while (low <= high) {
    let mid: number = low + Math.floor((high - low) / 2);
    let guess: number = nums[mid];
    if (guess === target) {
      return mid;
    } else if (guess <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
