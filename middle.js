// // For arrays with one or two elements, there is no middle. Return an empty array.- [1]--[], [1,2]-[]
// //For arrays with odd number of elements, an array containing a single middle element should be returned. [1,2,3]- [2], length 
// //For arrays with an even number of elements, an array containing the two elements in the middle should be returned [1,2,3,4]- [2,3]
// //We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.

// const eqArrays = function(resultArray, expectedArray) {
//   if (resultArray.length !== expectedArray.length){
//     return false;
//   }
//   for ( let i = 0; i < resultArray.length; i++) {
//       if (resultArray[i] !== expectedArray[i]) {
//          return false;
    
//     }
//   }
//   return true
//   }

//   const assertArraysEqual = function (one, two){
//     if (eqArrays(one, two)){ 
//        console.log(`\ud83c\udf51 Assertion Passed: Arrays are equal.`);
//      }
//      else console.log(`\ud83c\udf46 Assertion Failed: Arrays are not equal.`)
//    }


// const assertArraysEqual = require('./assertArraysEqual')

const middle = function (array){
  let newArray = [];
    if (array.length === 1) {
    return newArray
    }
    else if (array.length  === 2) {
     return newArray
    }
    else if (array.length % 2 === 0) {
      newArray = [array[(array.length/2)-1]]
        newArray.push(array[(array.length)/2])
          return newArray
    }
    else if (array.length % 2 !== 0) {
      newArray = [array[(array.length-1)/2]]
        return newArray
    }
}

// const testArray = [1,2,3];
// const resultArray = middle(testArray);
// const exprectedResult = [2]

// assertArraysEqual()

 module.exports = middle

