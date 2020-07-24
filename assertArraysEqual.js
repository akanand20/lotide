

const assertEqual = function (one, two){
  for (let i = 0; i < one.length; i++){
    if (one[i] !== two[i]) {
      return 'assertion :array one not equal to  array two'
    }
  }
  return 'assertion : array one is equal to array two'
}
console.log(assertEqual([1, 2, 3], [1, 2, 3]))








