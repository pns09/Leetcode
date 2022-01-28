// This problem is an example of peaks and valleys technique

// Below solution is not implemented using peaks and valleys
function minRewards(scores) {
  // Write your code here.
  // O(N) | O(N)
  let rewards = Array(scores.length).fill(1);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + rewards[i];
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }

  return rewards.reduce((a, b) => a + b);
}
console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));
// output: 25
// you would give out the following rewards: [4, 3, 2, 1, 2, 3, 4, 5, 1]

// 2
function minRewards(scores) {
  //o(n^2) | o(n) - backtrack to first index of array
  let rewards = Array(scores.length).fill(1);

  for (let i = 1; i < scores.length; i++) {
    let j = i - 1;
    if (scores[i] > scores[j]) {
      rewards[i] = rewards[j] + 1;
    } else {
      while (j >= 0 && scores[j] > scores[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j--;
      }
    }
  }
  return rewards.reduce((a, b) => a + b);
}
