  INSERT INTO department(department) VALUES
 ("Sales"),
 ("Engineering"),
 ("Finance"),
 ("Legal"),
 ("HR");

INSERT INTO role(role_type, salary, department_id) VALUES
 ("Account Manager", 130000.00, 2),
 ("Sales Lead", 90000.00, 1),
 ("Salesperson", 70000.00, 1),
 ("Software Engineer", 110000.00, 2),
 ("Lead Engineer", 130000.00, 2), 
 ("Accountant", 90000.00, 3),
 ("Accountant", 90000.00, 3),
 ("Legal Team Lead", 130000.00, 4),
 ("Lawyer", 110000.00, 4),
 ("HR Representative", 80000.00, 5),
 ("HR Director", 110000.00, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
("Poorva", "Ramani", 4, 2),
("Scott", "Wozouski", 4, 2);
