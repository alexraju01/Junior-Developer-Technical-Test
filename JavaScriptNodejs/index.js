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

//  ############ Question 4 ############
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// Answer: timeout will be last. This is because even though it says 0
// There is still a small delay for the  code inside setTimeOut() to process
// this is usually minimum  of 4ms set by the browser.

//  ############ Question 5 & 6 ############
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [{ name: "Alice" }, { name: "Bob" }];

app.get("/users", (req, res) => {
	const listUsers = users.map((user) => user.name);
	res.send(listUsers);
});

// ### Question 6 Answer #####
app.post("/add-user", (req, res) => {
	const user = { name: "Jonn" }; // Hard coded user

	users.push(user); // add new user to array from Question 5 (users)
	res.status(201).send({ message: "User added", users });
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
// NOTE: Not too sure what you mean but this code under the assumption of just return user names as list
// Answer: Just needed to map through the user array of objects
// to return the list of users by their names e.g. [Alice, Bob]
