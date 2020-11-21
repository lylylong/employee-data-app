USE emloyees;

INSERT INTO departmentTB(department_name)
VALUES ("Office"), ("Warehouse"), ("Sales");

INSERT INTO roletTB(role_title, salary, department_id)
VALUES ("Accountant", 50000, 1), 
("Receptionist", 35000, 1),
("Office Manager", 60000, 1),
("Warehouse Operator", 40000, 2), 
("Warehouse Manager", 60000, 2),
("Salesperson", 55000, 1),
("Sales Manager", 60000, 1);

INSERT INTO employeeTB(full_name, role_id, manager_id)
VALUES ("Amanda Schull", 1, 3), 
("Bridget Regan", 2, 3),
("Claire Holt", 2, 3),
("Daniel Sharman", 3, NULL),
("Eric Stoltz", 4, 5), 
("Frank Welker", 4, 5),
("Garry Chalk", 4, 5),
("Hugo Weaving", 5, NULL),
("Ian Holm", 6, 7), 
("John Hurt", 6, 7),
("Karen Allen", 6, 7),
("Leonardo DiCaprio", 7, NULL),