USE employeesDB;

INSERT INTO department (name)
VALUES ('Admin'), ('Development'), ('Sales'), ('Warehouse'), ('HR'), ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('District Manager', 120000, 1), ('Senior Engineer', 110000, 2), ('Sales Manager', 100000, 3), ('Warehouse Manager', 90000, 4), ('HR Manager', 90000, 5), ('Accounting Manager', 90000, 6), ('Receptionist', 50000, 1), ('Developer', 70000, 2), ('Sales Associate', 70000, 3), ('Warehouse Associate', 50000, 4), ('HR Rep', 70000, 5), ('Accountant', 70000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1, null), ('Jim', 'Jimson', 2, 1), ('Dwight', 'Schrute', 3, 1), ('Darryl', 'Philbin', 4, 1), ('Toby', 'Flenderson', 5, 1), ('Oscar', 'Nunez', 6, 1), ('Pam', 'Beesley', 7, 1), ('Jen', 'Jenson', 8, 2), ('Jim', 'Halpert', 9, 3), ('Rick', 'Dickson', 10, 4), ('Bob', 'Robertson', 11, 5), ('Angela', 'Martin', 12, 6);
