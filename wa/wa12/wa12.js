//Problem 1

let employees=[
    {"First_Name": "Sam", "department": "Tech","designation":"Manager","salary":40000,"Raise_eligible":"True"},
    {"First_Name": "Mary", "department": "Finance","designation":"Trainee","salary":18500,"Raise_eligible":"True"},
    {"First_Name": "Bill", "department": "HR","designation":"Executive","salary":21200,"Raise_eligible":"False"}, 
]

console.log("Problem 1")
console.log(employees)

//Problem 2

let company_info = {"company":

{"Companyname":"Tech Stars","website":"www.techstars.site","employees":employees}
}

console.log("Problem 2:")
console.log(company_info)



//Problem 3
employees.push({"First_Name": "Anna", "department": "Tech","designation":"Executive","salary":25600,"Raise_eligible":"False"})

console.log("Problem 3:")
console.log(employees)


//Problem 4

let total_salary = 0; 

for (let i=0; i<4; i++) {
    total_salary +=employees[i].salary
}

console.log("Problem 4:")
console.log("total salary is : " + total_salary)


//Problem 5

function raise(employees) {
    for (let i = 0; i < employees; i++) {
    if (employees[i].Raise_eligible) {
    employees[i].salary *= 1.1;
    employees[i].Raise_eligible = false;
    }
    }
    }
    
    raise(company_info.employees);
    console.log("Problem 5:")
    console.log(company_info);
    





//Problem 6 
for(let i = 0; i < 4; i++) {
    if (employees[i].First_Name === "Anna" || employees[i].First_Name === "Sam") {
    employees[i].wfh = true
} else{
    employees[i].wfh = false
}
}

console.log("Problem 6:")
console.log(employees)