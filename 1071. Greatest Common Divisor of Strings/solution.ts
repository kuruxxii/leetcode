/*
Suppose there exists a divisible string base,
we can write str1 and str2 in the form of multiples of base.
str1: basebasebasebasebase
str2: basebasebase

Since both strings contains multiples of the identical segment base,
their concatenation must be consistent, regardless of the order
(str1 + str2 = str2 + str1).

The divisible string base must be a prefix of each string, and its length is
the greatest common divisor (GCD) of the lengths of the two input strings, str1 and str2
*/

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  function gcd(a: number, b: number): number {
    if (a === 0) {
      return b;
    } else {
      return gcd(b % a, a);
    }
  }
  return str1.slice(0, gcd(str1.length, str2.length));
}
