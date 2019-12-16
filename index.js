var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "abcd1234",
    database: "cms_db"
});

connection.connect(function (err) {
    if (err) throw err;
    initialize();
});

function initialize() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Departments",
                "View All Roles",
                //        "View Employees By Department",
                //        "View Employees By Manager",
                "Add Employee",
                "Add Department",
                "Add Role",
                //        "Update Department",
                //        "Update Role"
                "Remove Employee",
                "Remove Department",
                "Remove Role",
                "Remove Department",
                "Remove Role",
                //        "Update Employee Role",
                "Exit"
                //        "Update Employee Manager",
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add Employee":
                    employeeSearch();
                    break;
                case "Add Department":
                    employeeSearch();
                    break;
                case "Add Role":
                    employeeSearch();
                    break;
                case "Remove Employee":
                    employeeSearch();
                    break;
                case "Remove Department":
                    employeeSearch();
                    break;
                case "Remove Role":
                    employeeSearch();
                    break;
                case "exit":
                    connection.end();
                    break;
            }
        });
}

function employeeSearch(){
console.log("Hello");
}

function viewEmployees(){
    connection.query("SELECT * FROM employee;", function(err, res) {
      if (err) throw err;
      console.table(['employee_id', 'first_name', 'last_name', 'role_id', 'manager_id'], res);
  });
}

function viewDepartments(){
      connection.query("SELECT * FROM department;", function(err, res) {
        if (err) throw err;
        console.table(['department_id', 'name'], res);
    });
}

function viewRoles(){
    connection.query("SELECT * FROM role;", function(err, res) {
      if (err) throw err;
      console.table(['role_id', 'title', 'salary', 'department_id'], res);
  });
}