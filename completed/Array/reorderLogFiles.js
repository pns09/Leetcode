/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let digitLogs = [];
  let wordLogs = [];
  let letterLogs = [];
  let i = 0;

  while (i < logs.length) {
    let currentLog = logs[i];
    let currentLogIndex = currentLog.indexOf(' ');

    if (parseInt(currentLog.substring(currentLogIndex + 1, currentLogIndex + 2)) >= 0) {
      digitLogs.push(currentLog);
    } else {
      let identifier = currentLog.substring(0, currentLogIndex);
      let subStr = currentLog.substring(currentLogIndex, currentLog.length);
      wordLogs.push({ word: subStr, identifier: identifier, index: logs.indexOf(currentLog) });
    }
    i++;
  }

  wordLogs.sort((a, b) => {
    if (a.word === b.word) {
      return a.identifier > b.identifier ? 1 : -1;
    } else return a.word > b.word ? 1 : -1;
  });
  for (let i = 0; i < wordLogs.length; i++) {
    letterLogs.push(logs[wordLogs[i].index]);
  }

  return letterLogs.concat(digitLogs);
};
