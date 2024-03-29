/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
// 1
var subdomainVisits = function (cpdomains) {
  let map = {};
  let res = [];

  for (let i = 0; i < cpdomains.length; i++) {
    let [count, domains] = cpdomains[i].split(' ');

    domains = domains.split('.');
    // when domains length is 3 - then store domain in map and shift from start.
    if (domains.length === 3) {
      let domain = domains.join('.');
      if (!map[domain]) map[domain] = parseInt(count);
      else map[domain] = map[domain] + parseInt(count);
      domains.shift();
    }

    // iterate over domains array and store in map
    while (domains.length) {
      let domain = domains.join('.');
      if (!map[domain]) {
        map[domain] = parseInt(count);
      } else {
        map[domain] = map[domain] + parseInt(count);
      }
      domains.shift();
    }
  }

  for (let [key, value] of Object.entries(map)) {
    res.push(value + ' ' + key);
  }
  return res;
};

// 2
var subdomainVisits = function (cpdomains) {
  let map = {};
  let pairs = [];

  for (let i = 0; i < cpdomains.length; i++) {
    map = getDomainVisits([cpdomains[i]], map);
  }

  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    let tempStr = `${map[keys[i]]} ${keys[i]}`;
    pairs.push(tempStr);
  }
  return pairs;
};

const getDomainVisits = (cpdomains, map) => {
  let domainsSplit = cpdomains[0].split(' ');

  let parentDomain = domainsSplit[1];
  let lastDomain = parentDomain.substring(parentDomain.lastIndexOf('.') + 1, parentDomain.length);
  let lastButOneDomain = parentDomain.substring(parentDomain.indexOf('.') + 1, parentDomain.length);

  map[parentDomain] = parseInt(map[parentDomain] === undefined ? 0 : map[parentDomain]) + parseInt(domainsSplit[0]);
  map[lastDomain] = parseInt(map[lastDomain] === undefined ? 0 : map[lastDomain]) + parseInt(domainsSplit[0]);
  if (lastButOneDomain.indexOf('.') >= 1) {
    map[lastButOneDomain] = parseInt(map[lastButOneDomain] === undefined ? 0 : map[lastButOneDomain]) + parseInt(domainsSplit[0]);
  }

  return map;
};

console.log(subdomainVisits(['9001 discuss.leetcode.com']));

//   Input: cpdomains = ["9001 discuss.leetcode.com"]
// Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
// Explanation: We only have one website domain: "discuss.leetcode.com".
// As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.
