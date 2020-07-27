const assertEqual = require('./assertEqual');

const head = function(array, n) {
  {if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];}

  return array.slice(0, n);
};

console.log (head([5,6,7], 5))
module.exports = head


