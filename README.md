# Employee Data App

## Description

This Employee Data App is a very useful tool for employee management. It's designed for the business owners who want to be able to view and manage the departments, roles, and employees for that company. So business owners can organize and plan their business.

Let's look into this app, this is a command-line application that accepts user input:

1. The user starts the application by type node index or npm start, then the app logo -- "Employee Data" will show up. At the same time, the user has presented the main menu with the following options:

- view all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role
- Leave

2. When the user chooses to view all departments, he/she is presented with a formatted table showing department names and department ids. Then the main menu shows up.
3. When the user chooses to view all roles, he/she is presented with the job title, role id, the department that role belongs to, and the salary for that role. Then the main menu shows up.
4. When the user chooses to view all employees, he/she is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to. Then the main menu shows up.
5. When the user chooses to add a department, he/she is prompted to enter the name of the department and that department is added to the database. Then the main menu shows up.
6. When the user chooses to add a role, he/she is prompted to enter the name, salary, and department for the role and that role is added to the database. Then the main menu shows up.
7. When the user chooses to add an employee, he/she is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database. Then the main menu shows up.
8. When the user chooses to update an employee role, he/she is prompted to select an employee to update and their new role. Then the main menu shows up.
9. When the user chooses to leave the app, he/she will exit this app, and a "See you next time" message will show up and confirm the app closes.

## Process Video

[![Video](https://user-images.githubusercontent.com/70302749/99922598-6227f300-2cff-11eb-8496-842ed6bd20cf.png)](https://drive.google.com/file/d/1BbJQN4nVE8R5XziO6NHDfZBBG2fKYwRE/view)
https://drive.google.com/file/d/1BbJQN4nVE8R5XziO6NHDfZBBG2fKYwRE/view

## Installation

To install the dependencies, run following command:

- npm i mysql2
- npm i inquirer
- npm i console.table
- npm i asciiart-logo

Update the mySQL password:

- use your own mySQL password in "connection.js" at line 11
  ![update pw](https://user-images.githubusercontent.com/70302749/99923182-8fc26b80-2d02-11eb-9238-e3bc60664569.png)

## Built With

- JavaScript
- Node.js
- MySQL

## Contributor

lylylong

## Contact

View my GitHub page:
https://github.com/lylylong

If you have any questions, please send me emails:
lylylong@gmail.com
