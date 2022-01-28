function tournamentWinner(competitions, results) {
  // Write your code here.
  // O(N) | O(N)

  let map = {};

  for (let i = 0; i < competitions.length; i++) {
    let [homeTeam, awayTeam] = competitions[i];
    if (results[i] === 0) {
      map[awayTeam] = (map[awayTeam] || 0) + 3;
    } else {
      map[homeTeam] = (map[homeTeam] || 0) + 3;
    }
  }

  let keys = Object.keys(map);

  let max = 0;
  let winner = '';
  
  for (let i = 0; i < keys.length; i++) {
    if (max === 0) {
      max = map[keys[i]];
      winner = keys[i];
    }
    if (max < map[keys[i]]) {
      winner = keys[i];
      max = map[keys[i]];
    }
  }
  return winner;
}

console.log(
  tournamentWinner(
    [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ],
    [0, 0, 1]
  )
);

// output: "Python"
