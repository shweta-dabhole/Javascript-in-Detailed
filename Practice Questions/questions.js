// 01. Create a variable.js file and declare variables and assign string, Boolean, undefined
// and null data types, Display all the value with their data type.
// let name='shweta'
// let bool= true
// let undef
// let number = " "
// console.log(name);
// console.log(bool);
// console.log(undef);
// console.log(number);

// 02. Declare variables to store your first name, last name, marital status, country and age 
//and display them using interpolation method.

// let fname='shweta', lname='dabhole', maritalstatus="unmarried", country='india', age=21
// console.log(fname,lname,maritalstatus,country,age);


// 03. Declare a variable and assign string value to it and change all the string characters
// to capital letters using toUpperCase() method.

// const upper= ()=>{
//     let name = "shweta";
//     console.log(name.toUpperCase());
// }
// upper()

// 04. Declare a variable and assign string value to it and check if the string contains a 
//word Script using includes() method.

// const includ = ()=>{
//     let str=" the life is scripted by the god !!"
//     console.log(str.includes("script"));
// }
// includ()

// 05. Declare a variable and assign string value to it and then split it into an array using
// split() method
// const func = function(){
//     let str="shweta"
//     let arr=[]
//     console.log(str.split(arr)); 
// }
// func()

// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma 
//and change it to an array.
// const spil=function(){
//     let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
//     let arr= str.split(" ,")
//     console.log(arr);
    
// }
// spil()

// 07. Declare an array containing the multiple values and use lastIndexOf to determine the 
//position of the first and last occurrence of a word "vitthal korvan". 

// const arr=["vitthal korvan"]
// console.log(arr[arr.length-1]);


// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and 
//the end of a string.

// let greeting = "   Hello, World!   ";
// console.log(greeting.trim()); 


// 09. Boolean value is either true or false.

// - Write three JavaScript statement example which provide truthy value.

// let str = "Hello, World!";
// console.log(!!str); 
// - Write three JavaScript statement example which provide falsy value.

// let str = "";
// console.log(!!str);

// 10. Figure out the result of the following comparison expression first without using console.log().
// After you decide the result confirm it using console.log()

// - 4 > 3

// - 4 >= 3

// - 4 < 3

// - 4 <= 3

// - 4 == 4

// - 4 === 4

// - 4 != 4

// - 4 !== 4

// - 4 != '4'

// - 4 == '4'

// - 4 === '4'

// - Find the length of python and jargon and make a falsy comparison statement.
// const str = "python"
// const str1 = "jargon";
// console.log(str.length, str1.length);
// console.log(str1.length != str1.length);



// 11. Use the Date object to do the following activities

// - What is the year today?

// - What is the month today as a number?

// - What is the date today?

// - What is the day today as a number?

// - What is the hours now?

// - What is the minutes now?
// let now = new Date();
// let yearToday = now.getFullYear();
// console.log("Year today:", yearToday);

// let monthToday = now.getMonth() + 1; 
// console.log("Month today:", monthToday);

// let dateToday = now.getDate();
// console.log("Date today:", dateToday);

// let dayToday = now.getDay();
// console.log("Day today (as a number):", dayToday);

// let hoursNow = now.getHours();
// console.log("Hours now:", hoursNow);

// let minutesNow = now.getMinutes();
// console.log("Minutes now:", minutesNow);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// Create a new Date object representing the current date and time
// let now = new Date();
// let seconds = now.getTime();

// let secondsS = Math.floor(seconds / 1000);

// console.log("Seconds elapsed since January 1, 1970:", secondsS);


// 12. Create a human readable time format using the Date time object

// - YYYY-MM-DD HH: mm
// const format = new Date();
// let year = format.getFullYear();
// let month = format.getMonth() + 1;
// let date = format.getDate();
// let hour = format.getHours();
// let min = format.getMinutes();
// console.log(`${year}-${month}-${date}-${hour}:${min}`);


// - DD-MM-YYYY HH: mm
// const format = new Date();
// let date = format.getDate();
// let month = format.getMonth() + 1;
// let year = format.getFullYear();
// let hour = format.getHours();
// let min = format.getMinutes();
// console.log(`${date}-${month}-${year}-${hour}:${min}`);

// - DD/MM/YYYY HH: mm
// const format = new Date();
// let date = format.getDate();
// let month = format.getMonth() + 1;
// let year = format.getFullYear();
// let hour = format.getHours();
// let min = format.getMinutes();
// console.log(`${date}/${month}/${year} ${hour}:${min}`);



// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 
//'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = Number(prompt("enter your age"))
// if(age>=18){
//     console.log("You are old enough to drive");
    
// }else{
//     console.log("wait for the number of years he needs to turn 18");
    
// }

// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a 
//number is even or not using JavaScript? Create a program which checks that the given 
//number is even or odd.

// let num= Number(prompt("enter the number"))
// if(num%2==0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }

// 15. Write a program which can give grades to students according to theirs scores:

// - 80-100, A

// - 70-89, B

// - 60-69, C

// - 50-59, D

// - 0-49, F

// let marks= Number(prompt('enter your marks'))
// if (marks>80) {
//   console.log("Grade A");
// } else if (marks >= 70 && marks > 89) {
//   console.log("Grade B");
// } else if (marks >= 60 && marks > 69) {
//   console.log("Grade C");
// } else if (marks >=50 && marks >59) {
//   console.log("Grade D");
// }else{
//     console.log("fail");
// }

// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :


// - September, October or November, the season is Autumn.

// - December, January or February, the season is Winter.

// - March, April or May, the season is Spring

// - June, July or August, the season is Summer
// let month =String(prompt("enter month"))
// switch (month) {
//   case "September":
//     console.log("the season is Autumn");
//     break;
//   case "October":
//     console.log("the season is Autumn");
//     break;
//   case "November":
//     console.log("the season is Autumn");
//     break;
//   case "December":
//     console.log("the season is Winter");
//     break;
//   case "January":
//     console.log("the season is Winter");
//     break;
//   case "February":
//     console.log("the season is Winter");
//     break;
//   case "March":
//     console.log("the season is Spring");
//     break;
//   case "April":
//     console.log("the season is Spring");
//     break;
//   case "May":
//     console.log("the season is Spring");
//     break;
//   case "June":
//     console.log("the season is Summer");
//     break;
//   case "July":
//     console.log("the season is Summer");
//     break;
//   case "August":
//     console.log("the season is Summer");
//     break;
//     default:
//         console.log("invalid input");
        
// }

// 17. Write a program which tells the number of days in a month.
// const dayInmonth = function(year, month){
//     return new Date(year, month +1, 0).getDate()
// }
// console.log(dayInmonth(2024, 2));

// 18. Write a program which tells the number of days in a month, now consider leap year.
// const dayInmonth = function(year, month){
//     return new Date(year, month +1, 0).getDate()
// }
// console.log(dayInmonth(2024, 2));


// 19. Create a countries.js file and store the countries name into this file, create a file
// web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// 20. In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

// shoppingCart.unshift('Meat')
// console.log(shoppingCart);

// - add Sugar at the end of your shopping cart if it has not been already added
// shoppingCart.push("Sugar");
// console.log(shoppingCart);

// - remove 'Honey'
// shoppingCart.pop();
// shoppingCart.pop();
// console.log(shoppingCart);
// shoppingCart.push("Sugar");
// console.log(shoppingCart);

// - modify Tea to 'Green Tea'
// shoppingCart.pop();
// shoppingCart.pop();
// shoppingCart.push("Green Tea")
// shoppingCart.push("Sugar");
// console.log(shoppingCart);


// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 
//'ETHIOPIA'. If it does not exist add to the countries list.
// let countries = [ "Germany", "France", "Italy","USA", "Canada",];

// if (countries.includes("Ethiopia")) {
//   console.log("ETHIOPIA");
// } else {
//   countries.push("Ethiopia");
//   console.log("Ethiopia added to the array:", countries);
// }

// 22. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


// - Sort the array and find the min and max age
// ages.sort();
// console.log(ages);

// const minAge = Math.min(...ages);
// console.log("Min age" + minAge);
// const maxAge = Math.max(...ages);
// console.log("Max age" + maxAge);

// - Find the median age(one middle item or two middle items divided by two)
// let mid = Math.ceil(ages.length /2)
// let num
// if(ages.length%2===0){
//     num=((ages[mid+1]) + ages[mid])/2
//     console.log(num);
    
// }else{
//     num= ages[mid]/2
//     console.log(num);
    
// }

// - Find the average age(all items divided by number of items)
// let first = ages[0]
// let sec = ages[1];
// let third = ages[2];
// let ffour = ages[3]
// let fifth = ages[4]
// let sixth = ages[5]
// let seve = ages[6];
// let eigh = ages[7]
// let nine = ages[8]
// let ten = ages[9];

// let avg = (first+sec+third+ffour+fifth+sixth+seve+eigh+nine+ten)/10
// console.log(avg);



// - Find the range of the ages(max minus min)
// let max=26, min=19

// let range= max - min
// console.log(range);

// - Compare the value of (min - average) and (max - average), use abs() method

// 23. Write a program to check that the number given by the user is a prime number or not.
// let num= Number(prompt("enter a number"))
// if(num%2===0){
//     console.log('prime number'); 
// }else{
//     console.log("not prime");
    
// }

// 24. Write a program to create two array "even" and "odd" having even and odd number 
//between the 0 to 100 (0 and 100 included).

// const even = [20, 32, 48, 54, 72,76, 98]
// const odd =[3, 13, 27, 67, 69, 33]
// console.log(even, odd);

// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height)
// in m2. Write a function which calculates bmi. BMI is used to broadly define different 
//weight groups in adults 20 years old or older. Check if a person is underweight, normal,
// overweight or obese based the information given below.

// - The same groups apply to both men and women.

// - Underweight: BMI is less than 18.5

// - Normal weight: BMI is 18.5 to 24.9

// - Overweight: BMI is 25 to 29.9

// - Obese: BMI is 30 or more

// const BodyMass = function(weight, height){
//     let bmi = weight /(height*height)
//     if(bmi<18.5){
//         console.log('underweight');
//     }else if(bmi==18.5 && bmi>24.9){
//         console.log('normal weight');
//     }else if(bmi==25 && bmi>29.9){
//         console.log('overweight');
//     }else{
//         console.log('obese');
        
//     }
// }
// BodyMass(50, 180)

// 26. Write a program to print the table of any number given by the user. The format of the output should be similar to the below example-

// If the number given by the user is 2 then the output should look like this-

// 2 * 1 = 2

// 2 * 2 = 4

// 2 * 3 = 6 and so on till 2 * 10 = 20.

// let num = Number(prompt('enter the number'))
// let table
// for (let i=1; i<11; i++){
//     table=i*num
//     console.log(`${num}*${i}=${table}`);
    
// }

// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


// 28. Write a program to print the given patterns using the loops-

// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

// *

// **

// ***
// let rows=3
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <=i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }



// b. Print a square pattern, if the input is 3 then the output should be similar to the given output

// ***

// ***

// ***
// let rows=3
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <=rows; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output

// *

// ***

// *****
// let rows=3
// let stars = 1;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= stars; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
//   stars += 2; 
// }
// 29. Write a JavaScript program which takes the input of filename as string and prints the extension of the file in the console.

// 30. Create a simple calculator program in JavaScript which can perform the addition, 
//subtraction, multiplication and division on given numbers.
// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// let ope = prompt("enter the opeartion to be perform: ");

// let res;
// if (ope == "+") {
//   res = num1 + num2;
//   console.log("the addition is " + res);
// } else if (ope == "-") {
//   res = num1 - num2;
//   console.log("the subtraction is " + res);
// } else if (ope == "*") {
//   res = num1 * num2;
//   console.log("the multiplication is " + res);
// } else if (ope == "/") {
//   res = num1 / num2;
//   console.log("the division is " + res);
// } else {
//   console.log("error");
// }