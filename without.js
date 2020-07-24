//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


// array without common 
// two parameters - one actaul array, second duplicate check
// ietrate through the array - move inside the array 
// check one by one if array is equal - remove them 
//if array is not equal put them inside 

const without = function(original, duplicate) {
        var newResult = []
  for ( let i = 0; i < original.length; i++) {
         
       if (contain(duplicate, original[i]) === false ) { 
         newResult.push(original[i])
        
       }
     } 
     console.log (newResult)
    }
    const contain = function (array, value) {
      for (i = 0; i < array.length; i++) {
        if (array[i] === value){
          return true
        }
      }
      return false
    }
  without([1, 2, 3], [1]) // => [, 3]
  without(["1", "2", "3"], [1, 2, "3"])  // => ["1", "2"]
