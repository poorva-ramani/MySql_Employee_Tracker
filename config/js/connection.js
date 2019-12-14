var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password: "abcd1234",
    database:"cms_db"
});

connection.connect(function(err){
    if(err) throw err;
    initialize();
});

function initialize(){
inquirer
.prompt({
    name: "action",
    type:"list",
    message:"What would you like to do?",
    choices:[
        "View All Employees",
        "View All Departments",
        "View All Roles",
//        "View Employees By Department",
//        "View Employees By Manager",
        "Add Employee",
        "Add Departments",
        "Add Role",
        "Remove Employee",
        "Remove Department",
        "Remove Role",
        "Update Employee Role",
        "Exit"
//        "Update Employee Manager",
    ]
}).then(function(answer){
    switch(answer.action){
        case "view_employees":
            employeeSearch();
            break;
            switch(answer.action){
                case "view_employees":
                    employeeSearch();
                    break;   
    }
})
}