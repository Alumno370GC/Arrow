//we can remove properties

const employee ={
name: "Tony",
position:"Officer",
salary:30000,

};
//delete object salary
delete employee.salary
//delete onject employee
delete employee.name

console.log(employee);


//we can also include functions


const Animal ={
name: "Bob",
age: 6,

// use function as value

raza: function (){
console.log("La raza de mi perro es pitbull!");


}

};

//call object method
Animal.raza();