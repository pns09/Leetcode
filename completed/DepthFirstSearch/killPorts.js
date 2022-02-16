/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
  let ports = [];

  if (kill === 0) return ports;

  ports.push(kill);

  for (let i = 0; i < ppid.length; i++) {
    if (kill === ppid[i]) {
      ports.push(...killProcess(pid, ppid, pid[i]));
    }
  }
  return ports;
};

console.log(killProcess(pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5))