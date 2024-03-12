/*
Fast pointer (fastIndex): finds the elements of the new array that does not contain the target element
Slow pointer (slowIndex): points to the location where the new array is updated.
*/

function removeElement(nums: number[], val: number): number {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
  }
  return slowIndex;
}
