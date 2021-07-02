//code for taking user input
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

//main program
var A = [12, 45, 52, 54, 87, 96, 102, 105, 108, 109];
var ele = parseInt(prompt("\n Enter the numebr: "));
var n = A.length;
var res = parseInt(binarySearch(A, 0, n - 1, ele));
if (res==-1) {
  console.log("element not in array");
} else {
  console.log("element is at " + (res + 1));
}

//Function for binary search
function binarySearch(A, beg, end, ele) {
  //checking if the array has more than one element
  if (end >= beg) {
    var mid = Math.floor((beg + end - 1) / 2); //calculating mid value

    //if element is at mid position
    if (A[mid] == ele) {
      return mid;
    }

    //if element is in the left subarray to mid
    else if (A[mid] > ele) {
      return binarySearch(A, beg, mid - 1, ele);
    }

    //if element is in the right subarray to mid
    else {
      return binarySearch(A, mid + 1, end, ele);
    }
  }
  return -1;
}
