DROP DATABASE IF EXISTS cms_db;

CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department(
 department_id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30),
 PRIMARY KEY (department_id)
);

CREATE TABLE role(
 role_id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(30),
 salary DECIMAL(10,4) NOT NULL,
 department_id INT NOT NULL,
 PRIMARY KEY (role_id)
);

CREATE TABLE employee(
employee_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT NOT NULL,
PRIMARY KEY (employee_id)
);