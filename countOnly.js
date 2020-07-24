const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion Passed: " + actual + "===" + expected);
    // console.log(`Assertion Passed: "${actual}" === "${expected}"`); 
  } else {
    console.log("Assertion Failed: " + actual + "!==" + expected);
    // console.log(`Assertion Failed: "${actual}" == "${expected}"`);
  } 
};


const countOnly = function(allItems, itemsToCount) {
  const results = {};
//iteration through the array 
  for (const item of allItems) {
    // condition if - each value in array iterated now used  as  key to get  value of object -conditon - actaully check automatically its true 
    //if (itemsToCount[item] = true)--- then its full array 
    if (itemsToCount[item]) { 
// new object results is = object-key value is one increment 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    //else { 
      //return nothing;-- if using true 
    //}
    //console.log(item);
  }

  console.log(results);
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);


