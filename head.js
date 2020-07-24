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

const head = function(array, n) {
  if (array == null) 
    return undefined;
  if (n == null) 
    return undefined;
  if (n < 0)
    return [];
  return array.slice(0, n);
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


