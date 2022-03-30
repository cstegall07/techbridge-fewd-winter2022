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

var siteUsersArr =  [{
    username:"admin", 
    password:"admin", 
    employee:"admin"
},
{
    username: "admin2",
    password: "admin2",
    employee: "admin2"
} ];

// const siteUsersArr = [siteUsers];
console.log(siteUsersArr);

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
    siteUsersArr.push(anyUser) 
    return 
 };

addSiteUsers("anicole", "firstuser", firstEmployee)
addSiteUsers("jwilson", "secuser", secondEmployee)
console.log(siteUsersArr);
console.log("siteUsersArr[2].password: ", siteUsersArr[2].password)

var signInBtn = document.getElementById("signIn")


    
    // function rblogin () {
    //     let userName = document.getElementById("username").value;
    //     let passWord = document.getElementById("password").value;
    //     let loginErrorMsg = document.getElementById("loginErrorMsg")
    //     let users = siteUsersArr;
    
    //     signInBtn.addEventListener("submit", e =>{
    //         e.preventDefault();
    //         for (i = 0; i < siteUsersArr.length; i++) {
    //             if (userName == users[i].username && passWord == users[i].password) {
    //             console.log(userName + " is logged in!");
    //             return
    //             // window.location.href = "home.html";
    //             } else {
    //             loginErrorMsg.classList.remove("hide");
    //             return
    //             } 
    //         }
    //     })
        

        
        
    // };

    signInBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const userName = document.getElementById("username").value;
        const passWord = document.getElementById("password").value;
        let users = siteUsersArr;
        for (i = 1; i < siteUsersArr.length; i++) {
            if (userName == users[i].username && passWord == users[i].password) {
                alert("You have successfully logged in.");
                window.location.href = "home.html";
                return
            } else {
                loginErrorMsg.classList.remove("hide");
            }
        }
    })
    









