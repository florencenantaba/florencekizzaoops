// OOP
// class ClassName{
//    statements
//  }

class Employee{
    // a  class always has a constructor, which is called a whenever a class is instantiated
    // or an object of the class is created
    constructor(name, id){
        this.name = name;
        this.id = id;
    
    }
}

// creating objects of the class employee
let emp1 = new Employee('John',1001);
let emp2 = new Employee('Peter',1002);

console.log(emp1.name);
console.log(emp1.id);