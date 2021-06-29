"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let a = [1, 3, 2, 5, 6];
let D = parseInt(prompt("enter value of D: "));
let N = a.length;
console.log("Rotated Array is: " + arrRotate(N, D));

function arrRotate(N, D) {
	var ar = [];
	var an = [];
	console.log("old Array: " + a);
	//Breaking the array in pieces
	for (var i = 0; i < N; i++) {
		if (i < D) {
			ar[i] = a[i];
		} else {
			an[i] = a[i];
		}
	}
	console.log(ar);

	//deleting the empty elements
	for (i = 0; i < D; i++) {
		an.shift();
	}
	console.log(an);

	return an.concat(ar);
}
