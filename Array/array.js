//JavaScript Array:
//Array in JavaScript can store any type of data. (primitive and non primitive) 
//(hetrogenous data)
//Arrays don't have fixed value. array value can differ by size of the array.
//pre-defined methods to work on array

//const arr1=[1,2,3,'shweta','geetika',true,false,undefined,null,function abc()
//{console.log('abc'), [12,3,5,6],{id:1, id:3};}]

// const a =5
// const b = a
// console.log(a);//5
// console.log(b);//5

//primitive vs reference (non-primitive)

// let a = 5
// let b = a
// b++
// console.log(a);// 5
// console.log(b);// 6

// const arr1=[1,2,3,4,5,6]
// const arr2 = arr1
// arr2[2]=10
// console.log(arr1);// 1210456
// console.log(arr2);// 1210456

// const array = [1,2,3,4,5,6]
//length property is used to check length of the arrays and string
// console.log(array.length);
//Array.isArray(arr_name) -> is used to check array is present or not (true/false)
// console.log(Array.isArray(array));
// array[2]=33
// console.log(array);

// let avg= 'jahsgd'
// console.log(Array.isArray(avg));

//Array Indexing:
// const array= [1,2,34,4,2,5,2,12,34,554,34,12,32,43,54,2]
// console.log(array[0]);//1
// For accessing the last element in the array we use array.length-1
// console.log(array[array.length-1]);//2
// console.log(array[array.length-8]);//34
// console.log(array[array.length]);//Undefined

// const arr=[1,2,3,4]
// console.log(arr[arr.length-1]);//4
// console.log(arr[arr.length-3]);//2
// console.log(arr[arr.length]);// Undefined

// Push, Pop, Shift, Unshift
// const arr = [1,2,3,4,5]
// arr.push(6)// push is used to insert an element at last index
// //console.log(arr);
// arr.pop()//pop is used to delete an element at last index
// console.log(arr);
// arr.unshift(6)//Unshift is used to add an element in fisrt index
// console.log(arr);
// arr.shift()//shift is used to delete an element in fisrt index
// console.log(arr);

/*----------- For Loop in Array -----------*/
// const numbers = [234,24,2,123,45,545,54,2,3]

// for(let i=0; i<numbers.length; i++){
//       console.log(numbers[i]);
// }

// const names = ['shweta', 'geetika','monalisa','rose']

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

/*------------ For of loop in Array -----------*/
// const fruits = ['apple', 'mango','oranges','banana','strawberry']

// for(let fruit of fruits){
//       console.log(fruit);
// }

// const ages = [12,35,38,2,37,20,36]

// for(let age of ages){
//       console.log(age);
// }

/*------------ For in loop in Array -----------*/

// const fruits = ["apple", "mango", "oranges", "banana", "strawberry"];

// for (let fruit in fruits) {
//   console.log(fruit);
// }

// const ages = [12, 35, 38, 2, 37, 20, 36];

// for (let age in ages) {
//   console.log(age);
// }

/*--------------- Array Destructing -----------*/

// const fruits = ["apple", "mango", "oranges", "banana", "strawberry"];

// const [a,b,c,d,e] = fruits

// console.log(b,a,c,d,e);

/*------------ Array Spread Operator --------------*/

// const fruits = ["apple", "mango", "oranges", "banana", "strawberry"];
// const ages = [12, 35, 38, 2, 37, 20, 36];
// const fruits2 = [...fruits, ...ages] //->spread operator(...array_name)
// fruits2[1]='chickoo'
// console.log(fruits2);
// console.log(fruits);

/*------------slice()-----------*/
/*Description: Returns a shallow copy of a portion of an array into a new 
array object selected from start to end (end not included).
Usage: To create a sub-array without modifying the original array.
*/

// let arr = [1, 2, 3, 4];
// let subArr = arr.slice(1,3); // subArr is [2, 3], arr is still [1, 2, 3, 4]
// console.log(subArr);

// const products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// const topProducts = products.slice(0, 3);
// topProducts: ['Laptop', 'Phone', 'Tablet']

// const students = ['John', 'Jane', 'Jack', 'Jill'];
// const group = students.slice(1, 3);
// group: ['Jane', 'Jack']

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const lastTwoFruits = fruits.slice(-2);
// console.log(lastTwoFruits);
// lastTwoFruits: ['cherry', 'date']

/*--------------concat()------------*/
/*
Description: Merges two or more arrays. This method does not change 
the existing arrays, but instead returns a new array.
Usage: To combine multiple arrays.
*/

// const teamA = ['Alice', 'Bob'];
// const teamB = ['Charlie', 'Dave'];
// const allEmployees = teamA.concat(teamB);
// allEmployees: ['Alice', 'Bob', 'Charlie', 'Dave']

// const ingredients1 = ['flour', 'sugar'];
// const ingredients2 = ['butter', 'eggs'];
// const allIngredients = ingredients1.concat(ingredients2);
// allIngredients: ['flour', 'sugar', 'butter', 'eggs']

// const electronics = ['TV', 'Radio'];
// const furniture = ['Sofa', 'Table'];
// const products = electronics.concat(furniture);
// products: ['TV', 'Radio', 'Sofa', 'Table']

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// const electronics = ['TV', 'Radio'];
// const furniture = ['Sofa', 'Table'];
// let combinedArr = arr1.concat(arr2, electronics, furniture); 
// combinedArr is [1, 2, 3, 4]
// console.log(combinedArr);

/*---------------sort()------------*/
/*
Description: Sorts the elements of an array in place and returns the sorted array.
 The default sort order is according to string Unicode code points.
Usage: To sort elements.
*/

// let arr = [3, 1, 4, 2];
// arr.sort(); // arr is now [1, 2, 3, 4]
// console.log(arr);

// const names = ['John', 'Jane', 'Jack', 'Jill'];
// names.sort();
// console.log(names);
// names: ['Jack', 'Jane', 'Jill', 'John']

/*------------------ reverse()-------------*/
/*
Description: Reverses the array in place. The first array element becomes 
the last, and the last array element becomes the first.
Usage: To reverse the order of elements.
*/

// let arr3 = [1, 2, 3];
// arr3.reverse(); // arr is now [3, 2, 1]

/*----------- Join() ---------*/
// const items = ['apple', 'banana', 'cherry'];
// const arr3 = [1, 2, 3];
// const itemList = arr3.join(' ');
// console.log(itemList);
// itemList: 'apple, banana, cherry'

/*---------- indexOf() ----------*/

// const products = ['Laptop', 'Phone', 'Tablet'];
// const index = products.indexOf('Tablet');
// console.log(index);
// index: 1

/*--------- forEach() ----------*/

// const items = ["apple", "banana", "cherry"];
// items.forEach((item) => console.log(item));
// const printItems = item => console.log(item);
// printItems(items)

// let arr = [3, 1, 4, 2];
// arr.forEach(num => console.log(num*2))

// const prices = [100, 200, 300];
// prices.forEach((price, index, arr) => arr[index] = price * 0.9 );
//prices: [90, 180, 270]

// prices.forEach((price, index, arr) =>{
//       return arr[index] = price * 0.9
// });
// console.log(prices);

/* ---------------- Map() --------------*/

// const ages = [24, 21, 24, 21];
// const newAges = ages.map(age => age + 1) //-> Implicit Return
// const newAges = ages.map((age) => { //-> Explicit return
//   return age + 1;
// });
// console.log(newAges);

/* --------------- Filter() ------------------*/

//syntax:
//let newArray = array.filter(callback(element, index, array), thisArg);

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]

// let words = ["apple", "banana", "cherry", "date"];
// let longWords = words.filter(function(word) {
//   return word.length > 4;
// });
// console.log(longWords); // ["apple", "banana", "cherry"]

// let people = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 30 },
//   { name: "Jim", age: 25 },
// ];
// let adults = people.filter(function (person) {
//   return person.age >= 21;
// });
// console.log(adults);

/* --------------- Reduce() ------------------*/
//syntax:
//let result = array.reduce(callback(accumulator, currentValue, currentIndex, array), 
//initialValue);

// let numbers = [11, 22, 33, 44, 55];
// let sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum); // 165

// let numbers = [1, 2, 3, 4, 5];
// let product = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator * currentValue;
// },3);
// console.log(product); // 120