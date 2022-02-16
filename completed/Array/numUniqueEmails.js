/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let set = new Set();
  for (let i = 0; i < emails.length; i++) {
    let [localName, domainName] = emails[i].split('@');

    let tempLocalName = '';
    for (let j = 0; j < localName.length; j++) {
      if (localName[j] === '.') continue;
      if (localName[j] === '+') break;
      else tempLocalName += localName[j];
    }

    tempLocalName += '@' + domainName;

    if (!set.has(tempLocalName)) {
      set.add(tempLocalName);
    }
  }

  return set.size;
};

console.log(numUniqueEmails(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']));

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
