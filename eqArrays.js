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
const eqArrays = function(resultArray, expectedArray) {
  if (resultArray.length !== expectedArray.length){
    return false;
  }
  for ( let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] !== expectedArray[i]) {
         return false;
    
    }
  }
  return true
  }
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);











