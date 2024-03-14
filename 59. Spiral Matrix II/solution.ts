function generateMatrix(n: number): number[][] {
  let matrix: number[][] = Array(n)
    .fill([])
    .map(() => Array(n).fill(0));
  let location = { row: 1, col: 1 };
  let direction: "right" | "down" | "left" | "up";
  direction = "right";
  for (let i = 1; i <= n ** 2; i++) {
    matrix[location.row - 1][location.col - 1] = i;
    switch (direction) {
      case "right":
        if (location.row + location.col === n + 1) {
          direction = "down";
          location.row++;
          continue;
        }
        location.col++;
        break;
      case "down":
        if (location.row === location.col) {
          direction = "left";
          location.col--;
          continue;
        }
        location.row++;
        break;
      case "left":
        if (location.row + location.col === n + 1) {
          direction = "up";
          location.row--;
          continue;
        }
        location.col--;
        break;
      case "up":
        if (matrix[location.row - 1 - 1][location.col - 1] !== 0) {
          direction = "right";
          location.col++;
          continue;
        }
        location.row--;
    }
  }
  return matrix;
}
