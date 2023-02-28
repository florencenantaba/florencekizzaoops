console.log("*****FOR LOOPS*****")
let student;
for (student =1; student <=5; student +=2){
    console.log('value of student: '+student)
}

let fruits= ['Apple', 'Banana', 'Grapes', 'Berries'];
let fruit;
console.log("***for in***")
for(fruit in fruits){
    console.log(fruits[fruit])
}
console.log("***for of***")
for(fruit of fruits){
    console.log(fruit)
}