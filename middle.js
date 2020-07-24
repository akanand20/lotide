// For arrays with one or two elements, there is no middle. Return an empty array.- [1]--[], [1,2]-[]
//For arrays with odd number of elements, an array containing a single middle element should be returned. [1,2,3]- [2], length 
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned [1,2,3,4]- [2,3]
//We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.
const middle = function (array){
  let newArray = [];
    if (array.length === 1) {
    console.log(newArray)
    }
    else if (array.length  === 2) {
     console.log(newArray)
    }
    else if (array.length % 2 === 0) {
      newArray = [array[(array.length/2)-1]]
        newArray.push(array[(array.length)/2])
          console.log(newArray)
    }
    else if (array.length % 2 !== 0) {
      newArray = [array[(array.length-1)/2]]
        console.log(newArray)
    }
}
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]