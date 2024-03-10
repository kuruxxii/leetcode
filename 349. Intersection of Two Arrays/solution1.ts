// Remember to specify that the Set will contain number values.

function intersection(nums1: number[], nums2: number[]): number[] {
  let set = new Set<number>();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      set.add(nums1[i]);
    }
  }
  return Array.from(set);
}
