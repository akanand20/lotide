// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion Passed: " + actual + "===" + expected);
    // console.log(`Assertion Passed: "${actual}" === "${expected}"`); 
  } else {
    console.log("Assertion Failed: " + actual + "!==" + expected);
    // console.log(`Assertion Failed: "${actual}" == "${expected}"`);
  } 
};

const tail = function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};
assertEqual(tail([5,6,7]), 5);
