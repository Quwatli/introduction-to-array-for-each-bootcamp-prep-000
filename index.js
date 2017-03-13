//FOR SOME REASON FUNCTIONS ARE ONLY DEFINED IN THE INDEX-TEST FILE

var evens=[0,2,4,6,8,10]

evens.forEach(even=>{console.log('${even} is not odd!')})

evens.forEach((even, index, array)=>{debugger console.log('${even} is not odd!')})

function square(n)
{
  return n*n
}

function doToEvens(callback)
{
  evens.forEach(callback)
}





var animals=["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals)
