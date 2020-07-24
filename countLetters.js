const countLetter = function (string){
  const objResult = {};
  for (i = 0; i < string.length; i++)
  { const key  = string[i]
    if (!objResult[key]){
      objResult[key] = 0
    }
    objResult[key]++
  }
console.log(objResult)
}

countLetter('ANAND')
