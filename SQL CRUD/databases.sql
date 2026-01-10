-- ########### Question 16 ###########
-- What does this query do?
SELECT name FROM employees WHERE department = 'Sales';
-- Answer: This is saying select all the names of the emplooyes
--  from the employees table where they are in the department
-- called 'Sales' 

-- ########### Question 17 ###########
-- Q17: Fix the broken SQL query.
INSERT INTO employees name VALUES ('Alice');

-- Answer: The name need to be wrapped in bracket so it knows its
-- a field from the table and must match exactly.
INSERT INTO employees (name) VALUES ('Alice');


-- ########### Question 18 ###########
-- Q18: Write SQL to update salary of employee with id = 5 to 50000.

UPDATE employees
SET salary = 200
WHERE id BETWEEN 5 AND 50000
-- Answer: Update the table which the specified field using 'SET' and
-- use the 'BETWEEN' to get with specified range

-- ########### Question 19 ###########
-- Q19: Write SQL to delete all employees from Marketing department.

DELETE FROM employees 
WHERE department = "Marketing"
-- Answer: Use 'DELETE' to delete or detroy the a record in a table
-- and use where caluse to give the condition in this case department with 'marketing'

-- ########### Question 20 ###########
-- Q20: Write SQL to join orders and customers on customer_id and show all order fields customer name.

SELECT orders.*, Name
FROM orders
JOIN employees
ON orders.EmployeeId=employees.employeeId; 

-- Answer: Using the keyword 'JOIN' it allows the two table that have rekated data to be joined by id,
-- with the use if primary key and forgein e.g. in this example i have matched the 'employeeId' from the employee table
-- with 'employeeId' in the order table


