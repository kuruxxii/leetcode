// time complexity：O(n^2)
// space complexity：O(1)
function removeElement(nums: number[], val: number): number {
  let size: number = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === val) {
      // When we find an element that needs to be removed, move all elements after it forward one position.
      for (let j = i + 1; j < size; j++) {
        nums[j - 1] = nums[j];
      }
      i--; // Since all elements after index i are moved one position forward, i should also moved one position forward
      size--;
    }
  }
  return size;
}
