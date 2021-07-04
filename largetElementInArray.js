"use strict";
const ps = require("prompt-sync");
const prompt = ps();

function largest(arr, n) {
	var max = 0;
	for (i = 0; i < n; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

var n = prompt("\nenter length of array: ");
var i = 0;
var arr = [];
console.log();
while (i < n) {
	let val = prompt("enter " + i + "th index value: ");
	arr.push(val);
	i++;
}
console.log(arr);
console.log("\nLargest element is: " + largest(arr, n));
