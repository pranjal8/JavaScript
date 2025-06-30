/* 
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that 
are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) { // Remove if outside [a, b]
      arr.splice(i, 1);
      i--; // Important: Adjust index after removal
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]