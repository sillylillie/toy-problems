/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 
Constraints:
1 <= n <= 104
*/

// input
let n = 37;

let a = Array(n);

for (let i = 0; i < n; i++) {
	// default value is the index (starting at 1) as a string
	let index = i+1;
	a[i] = String(index);
	
	// replace string if certain divisibility requirements are met
	if (index % 15 == 0) {
		a[i] = 'FizzBuzz';
	} else if (index % 3 == 0) {
		a[i] = 'Fizz';
	} else if (index % 5 == 0) {
		a[i] = 'Buzz';
	}
}

// output
console.log(a);