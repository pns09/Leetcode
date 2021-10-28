const checkNames = (values) => {
  let regex = new RegExp('[s]');
  let invalidNamesArr = [];

  for (let i = 0; i < values.length; i++) {
    if (!regex.test(values[i])) {
      invalidNamesArr.push(values[i]);
    }
  }
  return invalidNamesArr;
};

console.log(checkNames(['Karen Jaye Ongoco', 'Sherwyn Vargas', 'Sunver Bastes']));
