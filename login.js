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

var siteUsers =  {
    username:"", password:"", employee:""
};

const siteUsersArr = [siteUsers];
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
        console.log("employee constructor permission: ", permission);
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

    let firstEmployee = new Employee(
        "Alexis Nicole", 
        3210, 
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

    return siteUsersArr.push(anyUser) 
 };

addSiteUsers("anicole", "firstuser", firstEmployee)
addSiteUsers("jwilson", "secuser", secondEmployee)
console.log(siteUsersArr);
console.log("siteUsersArr[2].password: ", siteUsersArr[2].password)

var signInBtn = document.getElementById("signIn")

window.onload = function() {
    
    function rblogin () {
        let userName = document.getElementById("username").value;
        let passWord = document.getElementById("password").value;
        let loginErrorMsg = document.getElementById("loginErrorMsg")
        

        console.log(userName);
        console.log(passWord);
        
        
        let users = siteUsersArr;
        
        for (i = 0; i < siteUsersArr.length; i++) {
            if (userName == users[i].username && passWord == users[i].password) {
            window.location.href = "home.html";
            } else {
            loginErrorMsg.classList.remove("hide");
            } 
             
        }
        return false 
    }
    signInBtn.onclick = rblogin()
};






