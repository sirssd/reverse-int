module.exports = function reverse (n) {
let str
  if(n < 0) {
    str = String(-(n))
  } else { 
    str = String(n);
  }
  let arr = str.split('');

  return +arr.reverse().join('')
}
