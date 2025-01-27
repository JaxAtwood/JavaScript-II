// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Array
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


//Question 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr[0]);
}
getLength(items, function(length) {
  console.log(items.length)
});


//Question 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[0]);
}
last(items, function() {
  console.log(items[items.length -1])
});


//Question 3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
function sum (num1, num2){
  return num1 + num2
}
console.log(sumNums(2,5, sum));



//Question 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
function product (num1, num2){
  return num1 * num2
}
console.log(multiplyNums(2,5, product));


//Question 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}
function includesMe (item, list){
}
console.log(items.includes("Pencil"));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
