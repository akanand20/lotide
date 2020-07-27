

const tail = function(array, n) {
  {if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];}

  return array.slice(array.length - 1, n);
};

 module.exports = tail