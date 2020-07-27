
const eqArrays = require('./eqArrays')

const assertArraysEqual = function (one, two){
   if (eqArrays(one, two)){ 
      console.log(`\ud83c\udf51 Assertion Passed: Arrays are equal.`);
    }
    else console.log(`\ud83c\udf46 Assertion Failed: Arrays are not equal.`)
  }

  module.exports = assertArraysEqual
  
// assertArrayEqual([1, 2, 3], [1, 2, 3])









