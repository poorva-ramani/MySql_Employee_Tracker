 INSERT INTO department(department_id) VALUES
 ("Sales"),
 ("Engineering"),
 ("Finance"),
 ("Legal"),
 ("HR");

 INSERT INTO role(title, salary, dept_id) VALUES
 ("Account Manager", 100000.00, 3),
 ("Senior Engineer", 110000.00, 2);
 

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
("Poorva", "Ramani", 1, 2),
("Scott", "Wozouski", 1, 2);
