// sorting
// two pointer
function solution(N) {
  let discsOpenArr = [];
  let discsCloseArr = [];

  let openDiscs = 0;
  let intersections = 0;
  for (let i = 0; i < N.length; i++) {
    discsOpenArr.push(i - N[i]);
    discsCloseArr.push(i + N[i]);
  }

  discsOpenArr.sort((a, b) => a - b);
  discsCloseArr.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  while (p1 < discsOpenArr.length) {
    if (discsOpenArr[p1] <= discsCloseArr[p2]) {
      if (intersections > 10000000) return -1;
      intersections += openDiscs;
      openDiscs++;
      p1++;
    } else {
      openDiscs--;
      p2++;
    }
  }

  return intersections;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
// output: 11
// codility : number of disc interactions
