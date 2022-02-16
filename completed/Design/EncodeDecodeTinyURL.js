/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  this.map = {};
  this.id = 0;

  this.map[this.id] = longUrl;

  return `https://tinyurl.com/${this.id++}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let index = shortUrl.split('com/')[1];
  return this.map[index];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
