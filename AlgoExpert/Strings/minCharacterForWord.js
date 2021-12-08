function minimumCharactersForWords(words) {
  // Write your code here.
  let characterMap = {};
  let maxFrequencies = {};
  let characters = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      characterMap[words[i][j]] = (characterMap[words[i][j]] || 0) + 1;
    }
    for (const character in characterMap) {
      const frequency = characterMap[character];
      if (character in maxFrequencies) {
        maxFrequencies[character] = Math.max(frequency, maxFrequencies[character]);
      } else {
        maxFrequencies[character] = frequency;
      }
    }
    characterMap = {};
  }

  for (const character in maxFrequencies) {
    const frequency = maxFrequencies[character];
    for (let i = 0; i < frequency; i++) {
      characters.push(character);
    }
  }

  return characters;
}

console.log(minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a']));
