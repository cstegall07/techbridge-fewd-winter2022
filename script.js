// employee and managers should be able to login with username and passwords
var permissionSet = {add: true, delete: true, update: true, viewReport: true, createUsers: true};

class User {
    constructor(username, password, employee){
        this.username = username;
        this.password = password;
        this.employee = employee;
    }
}

// create an array for users and passwords
var siteUsers = [{username:""}, {password:""}, {employee:""}];
   

console.log(siteUsers);

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
const loginErrorMsg = document.getElementById("loginErrorMsg");


var initialUsers = () => {
    let firstEmployee = new Employee(
        "Alexis Nicole", 
        0321, 
        {add: true, delete: false, update: true, viewReport: false, createUsers: false}, 
        1
    );
    console.log(firstEmployee)

    let secondEmployee = new Manager(
        "James Wilson", 
        5678, 
        {add: true, delete: true, update: true, viewReport: false, createUsers: true}, 
        1, 
        firstEmployee
    );

    let thirdEmployee = new Owner(
        "Mary Lamb", 
        7890, 
        {add: true, delete: true, update: true, viewReport: true, createUsers: true}, 
        0, 
        firstEmployee, secondEmployee
    );

    var addSiteUsers = (username, password, employee) => {
       
       let anyUser = new User(username, password, employee);
       siteUsers.push(anyUser)
       return 
    }

    addSiteUsers("anicole", "firstuser", firstEmployee)
};

console.log(siteUsers);

// signIn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const userName = loginForm.username.value;
//     const passWord = loginForm.password.value;

//     let users = siteUsers();
//     if (userName === users[i].userId && passWord === users[i].pw) {
//         window.location.href = "home.html"
//     } else {
//         loginErrorMsg.classList.remove();
//     }
// })
