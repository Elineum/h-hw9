"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];

// if we need delete all elements, code below work correct.
// BUT, if we need delete only 1 item, check variant 2 <3
function removeElement(arr, el) {
  while (arr.includes(el)) {
    arr.splice(arr.indexOf(el), 1);
  }
}

// variant 2
/* 
function removeElement(arr, el) {
  arr.splice(arr.indexOf(el), 1);
}
*/

removeElement(array, 5);
console.log(array);
