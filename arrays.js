var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (array,element){
var newArray = [element,...array]
return newArray


}

function destructivelyAddElementToBeginningOfArray (array, element) {

array.unshift(element)
return array
}

function addElementToEndOfArray (array,element){
var newArray =[...array,element]
return newArray
}

function destructivelyAddElementToEndOfArray (array,element){
  array.push (element)
  return array
}

function accessElementInArray (array,index){
return array [2]
}

function destructivelyRemoveElementFromBeginningOfArray (array, element){
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray (array, element){
var newArray = [array,element]
  newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray (array,element){
  array.pop(element)
  return array

}
function removeElementFromEndOfArray (array,element){
  var newArray = [array,element]
newArray = array.slice(0, array.length -1)
return newArray
}
