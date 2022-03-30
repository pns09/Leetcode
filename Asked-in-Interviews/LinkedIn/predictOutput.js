const Foo = function (a) {
  this.baz = function () {
    return a;
  };

  function bar() {
    return a;
  }
};

Foo.prototype = {
  biz() {
    return a;
  },
};

const f = new Foo(7);

console.log(f.bar()); // ? TypeError: f.bar() is not a function
console.log(f.baz()); // ? 7
console.log(f.biz()); // ? ReferenceError: a is not defined
