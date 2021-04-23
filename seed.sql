USE employeesDB;

INSERT INTO department (name)
VALUES ('Engineering'), ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('Project Manager', 80000, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Bob', 'Smith', 1);
