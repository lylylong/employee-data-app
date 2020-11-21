USE employees;

INSERT INTO departmentTB
(department_name)
VALUES ('Office'), ('Warehouse'), ('Sales');

INSERT INTO roleTB
(role_title, salary, department_id)
VALUES ('Accountant', 50000, 1), 
('Receptionist', 35000, 1),
('Office Manager', 60000, 1),
('Warehouse Operator', 40000, 2), 
('Warehouse Manager', 60000, 2),
('Salesperson', 55000, 3),
('Sales Manager', 60000, 3);

INSERT INTO employeeTB
(full_name, role_id, manager_name)
VALUES ('Amanda Schull', 1, 'Daniel Sharman'), 
('Bridget Regan', 2, 'Daniel Sharman'),
('Claire Holt', 2, 'Daniel Sharman'),
('Daniel Sharman', 3, NULL),
('Eric Stoltz', 4, 'Hugo Weaving'), 
('Frank Welker', 4, 'Hugo Weaving'),
('Garry Chalk', 4, 'Hugo Weaving'),
('Hugo Weaving', 5, NULL),
('Ian Holm', 6, 'Leonardo DiCaprio'), 
('John Hurt', 6, 'Leonardo DiCaprio'),
('Karen Allen', 6, 'Leonardo DiCaprio'),
('Leonardo DiCaprio', 7, NULL);