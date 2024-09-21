// objects is reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

/*========== Ways to create an Object ===========*/
//1. Object Literal
// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Developer",
//   isMarried:true,
//   mail:'johncena@gmail.com'
// };

//2. new Keyword
// const person = new Object(); //-> Constructor means a function
//which has same class name
// person.name = "John";
// person.age = 30;
// person.occupation = "Developer";

//3. Object.create()
// const person = Object.create(null);
// person.name = "John";
// person.age = 30;
// person.occupation = "Developer";
// console.log(person);

/*=============== Accessing an Object ============*/
//1. Dot Notation
// const person = { name: "John", age: 30, occupation: "Developer" };
// console.log(person.name); // "John"
// person.name = "Jane";
// console.log(person.name); // "Jane"

//2. Bracket Notation
// const person = { name: "John", age: 30, occupation: "Developer" };
// console.log(person["name"]); // "John"
// person["name"] = "Jane";
// console.log(person["name"]); // "Jane"

// const person = { name: "John", age: 30, occupation: "Developer" };
// console.log(person);
// delete property in object
// delete person.age;
// console.log(person);

// update the key/ value (property) of an object
// person.name='vitthal'
// console.log(person);

//Object Destructring
// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Developer",
//   person2: { fname: "vitthal", myage: 38 },
// };
// const { name, lastName='Doe', age, occupation: occ,
//person2:{fname, myage} } = person;
// console.log(name); // "John"
// console.log(age); // 30
// console.log(occ); //Developer
// console.log(myage);//38
// console.log(lastName);//Doe

//Object Destructuring with Rest Operator
// const person = { name: 'John', age: 30, occupation: 'Developer',
//hobbies: ['coding', 'reading'] };

// const { name, age, ...rest } = person;

// console.log(name); // "John"
// console.log(age); // 30
// console.log(rest); // { occupation: 'Developer', hobbies: ['coding', 'reading'] }

/*================= Spread Operator in Objects ================*/
//syntax:
//const newObj = { ...obj1, ...obj2, ... };

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const newObj = { ...obj1, ...obj2 };

// console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }

//Overriding Properties:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const newObj = { ...obj1, ...obj2, person: { name: "vitthal", age: 35 } };

console.log(newObj); // { a: 1, b: 3, c: 4, person: { name: 'vitthal', age: 35 } }
