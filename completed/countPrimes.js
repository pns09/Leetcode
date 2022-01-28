/**
 * @param {number} n
 * @return {number}
 */
// Sieve of Eratosthanes method of checking prime numbers.
var countPrimes = function (n) {
  if (n <= 2) return 0;

  let prime = Array(n).fill(true); // start with an assumption that everything is a prime number 
  
  // mark all the multiples starting from 2 as false - because multiples can never be primes
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i] == true) {
      for (let j = i * i; j < n; j += i) {
        prime[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (prime[i] == true) {
      count++;
    }
  }
  return count;
};
console.log(countPrimes(10));
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


// Brute Force
var countPrimes = function (n) {
  let res = [];
  for (let i = 2; i < n; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(i);
    }
  }
  console.log(res);
  return res.length;
};

// console.log(countPrimes(10));
