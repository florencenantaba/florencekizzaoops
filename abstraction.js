// is a way of hiding implementation details and showing only the functionality to the users
// hides vertain details and show essentials

function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary =baseSalary;
    this.monthlyBonus = 1000; // this property is being added to emplyee constructor
}
//this method is exposed as a property
this.calculateFinalSalary = function(){
    let finalSalary = this.baseSalary + this.monthlyBonus
    console.log('Final Salary is : '+finalSalary)
}
//the method is exposed as a property
this.getEmpDetails = function(){
    console.log('Name : '+this.name+' Age :'+this.age);
}

let emp1 = new Employee('John', 30, 1000)
emp1.getEmpDetails();
emp1.calculateFinalSalary();

//let's not expose the calculateFinalSalary function