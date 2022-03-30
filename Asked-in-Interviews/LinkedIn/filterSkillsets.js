// Given
const endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
];

// Result
[
  { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
  { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
  { skill: 'html', users: ['Sue'], count: 1 },
];

// eg: https://i.imgur.com/UIeB3n4.png

const filterSkills = (endorsements) => {
  let obj = {};

  for (let { skill, user } of endorsements) {
    if (!obj[skill]) {
      let map = {};
      map['skill'] = skill;
      map['users'] = [user];
      map['count'] = 1;
      obj[skill] = map;
    } else {
      let map = obj[skill];
      map['users'].push(user);
      map['count']++;
    }
  }

  return Object.values(obj).sort((a, b) => (a['count'] > b['count'] ? -1 : 1));
};

console.log(filterSkills(endorsements));
