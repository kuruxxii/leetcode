function sortedSquares(nums: number[]): number[] {
  let squares: number[] = nums.map((num) => num * num);
  return squares.sort((a, b) => a - b); // To use numeric sort, you must supply a compareFn.
}
