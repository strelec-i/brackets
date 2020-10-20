module.exports = function check(str, bracketsConfig) {
  const brackets = Object.fromEntries(bracketsConfig);
  const arr = [];

  for (const el of str.split('')) {
      if (arr[0] === el) {
          arr.shift();
      } else if (brackets[el]) {
          arr.unshift(brackets[el]);
      } else {
          return false;
      }
  }
  return arr.length === 0;
}
