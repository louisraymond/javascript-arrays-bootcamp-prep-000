var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
  function addElementToBeginningOfArray(array,element) {
    newone= [element,...array];
    return newone;
  }
   
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
  
}

function addElementToEndOfArray(array, element) {
      newone= [...array, element];
      return newone

}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return [...array.slice(1)];
}

function 