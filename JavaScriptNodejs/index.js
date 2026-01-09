questions = [1, 2, 3, 4, 5, 6, 7, 8];
//  ############ Question 1 ############
const numbers = [1, 2, 3];
const result = numbers.map((num) => num * 2);
console.log(result);
// The answer is: [2,4,6]

//  ############ Question 2 ############
function add(a, b = 0) {
	return a + b;
}
console.log(add(5));
// Answer: The parameter b will have default value of 0
// so that means the if the the parameter is not explixilty
// defined when calling the function it will take the default value.

//  ############ Question 3 ############
const arrayOfStrings = ["hello", "good", "chicken"];

const upperCase = (strArray) => strArray.map((str) => str.toUpperCase());
console.log(upperCase(arrayOfStrings));

// Answer: There is a built in str methid called toUpperCase
// So this solution is created assuming that the arry is fully
// string and using map array function to loop for each items in the array


