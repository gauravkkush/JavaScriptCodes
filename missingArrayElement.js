let array = [1, 2, 3, 5, 8, 9, 7, 6];
var n=array.length+1;
console.log(MissingNumber(array,n))
function MissingNumber(array, n) {
	let sum = (n * (n + 1)) / 2;
	let j = 0;
	var sumArr = 0;
	while (j < n -1) {
		sumArr += array[j];
        j+=1;
	}
	var missNum = sum - sumArr;
	return missNum;
}
