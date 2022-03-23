// employee and managers should be able to login with username and passwords
var permissionSet = {add: true, delete: true, update: true, viewReport: true, createUsers: true};

class User {
    constructor(username, password, employee){
        this.username = username;
        this.password = password;
        this.employee = employee;
    }
}

class Employee {
    constructor(name, idNum, permission, storeNum){
        this.name = name;
        this.idNum = idNum;
        this.permission = permission;
        this.storeNum = storeNum;
        this.employeeType = "Employee";

        console.log("employee constructor name: ", name);
        console.log("employee constructor idNum: ", idNum);
        console.log("employee constructor permission: ", permissions);
        console.log("employee constructor storeNum: ", storeNum)
    }
}

class Manager extends Employee {
    constructor(name, idNum, permission, storeNum, employees) {
        super(name, idNum, permission, storeNum);
        this.employees = employees;
        this.employeeType = "Manager";
    }

    changeEmployeePerm(employee, updatedPermissionSet){
        let foundEmployee = false;
        for(let i = 0; i < this.employees.length; i++){
            if(employee.idNum === this.employees[i].idNum){
                employee.permissions = updatedPermissionSet;
                foundEmployee = true;
                break;
            }
        }
        return employee;
    }
}

class Owner extends Manager {
    constructor(name, idNum, permission, storeNum, employees,) {
        super(name, idNum, permission, storeNum, employees);
        this.employeeType = "Owner";
    }
}

// var getSiteUsers = () => {

// }

// var login = (user, pw) => {
//     setLoggedInUser(null);
//     let loggedIn = false;
//     let users = getSiteUsers();

// }

const loginForm = document.getElementById("loginForm");
const signIn = document.getElementById("signIn");

var initialUsers = () => {
    let firstEmployee = new Employee("Alexis Nicole", 0321, {add: true, delete: false, update: true, viewReport: false, createUsers: false}, 1)
    console.log(firstEmployee)
}