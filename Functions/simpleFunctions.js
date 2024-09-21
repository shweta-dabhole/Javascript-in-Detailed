//Function defination
// function Geetika(){
//     console.log('Hi Geetika!');
// }

//Geetika() // Calling a function

// Calculator

// let num1 = 34,
//   num2 = 2;
// console.log(`number 1 is : ${num1} and number 2 is ${num2}`);// template literal
// let result

// function add(){
//    return num1 + num2
// }
// function sub() {
//   return num1 - num2;
// }
// function mul() {
//   return num1 * num2;
// }
// function div() {
//   return num1 / num2;
// }

// console.log(add());
// console.log(sub());
// console.log(mul());
// console.log(div());

// function factorial(num) {
//   // parameter
//   let fact = 1;
//   while (num > 0) {
//     fact *= num;
//     num--;
//   }
//   return fact;
// }

// console.log(factorial(5)); // argument

// console.log(typeof console.log) ;

// console.log()

// multiplicaton of 1st and last digit of number
// function multi(num){
//     let lnum=num%10
//     num= Math.floor(num/10)
//     while(num>9){
//         rem=num%10
//         num=Math.floor (num/10)
//         // console.log(num);
//     }
//     console.log(num*lnum);
// }

// multi(10009)

//Method->Object
// let person = {
//   fname: "Vitthal",
//   lname: "korvan",
//   age: 99,
//   mobile: 653112111,
//   email: "vck@gmail.com",
//   f: function details() {
//     console.log("function is called!");
//   },
// };

// console.log(person.f());
//Method -> A method is a function that is associated with an object or a class. 
//Methods are called using the dot notation on an object.

//Function -> A function is a reusable block of code that performs a specific task. 
//It takes input(s), processes them, and optionally returns an output. Functions are 
//standalone entities and are called directly by their name.

/* -------- function Defination ---------  */

//Syntax:
//Defining a function
// function function_name(parameters-> not mendentory){
      //block of code
//}

//calling a function
//function_name(Arguments -> if not passed Undefined Prints)

// function fullname(fname, lname){
//       console.log(`The firstname is ${fname} and lastname is ${lname}`);
// }

// fullname("vitthal");


// function Geetika(name){
//       console.log(`My name is ${name}`);
// }

// Geetika('Shweta');

//Function Argument vs Parameter

//Paramter -> Function parameters are the names listed in the function's definition. 

//Function arguments -> are the real values passed to the function. Parameters are 
//initialized to the values of the arguments supplied.

// function people(name1='a', name2='v', name3='Vitthal'){
//       return `${name1} ${name2} ${name3}`
// }

// let output = people('shweta',2,80)
// console.log(output);


////hoisting : 
// hoisting is a JavaScript mechanism where variables and function declarations 
//are moved to the top of their scope before code execution.
// hoisting is only allowed for function declarations.

// helloWorld();
// function helloWorld(){
//       console.log('Hello World');
// }



// console.log(fname);
// var fname = 'vitthal'

/* -------- function Expression ---------  */

// const name = function fullname(fname, lname){
//       console.log(`The firstname is ${fname} and lastname is ${lname}`);
// }

// name("vitthal", "korvan");

/* -------- Arrow function  ---------  */

// const name = (fname = "a", lname = "v") => {
//   console.log(`The firstname is ${fname} and lastname is ${lname}`);
// };
// name("vitthal", "korvan");




// function defination

// function helloWorld(){
//    console.log("hello world");
// }

// helloWorld()


// function expression 

// const hello = function(){
//     console.log("hello world");
// }
// hello()


// Arrow function 

// const helloWorld = () => {
//     console.log("hello world");
// }
// helloWorld();


// function factorial(num){
//     let fact=1
//     while(num>0){
//         fact=fact*num
//         num--
//     }
//     console.log(fact);
// }
// factorial(4)





/* ----------- Lexical Scope ------------ */

// function a(){
//     const myname = 'Geetika'
//     const b= function(){
//         return myname;
//     }

//     const c = ()=>{
//         const myname = 'shweta'
//         return myname;
//     }
//     console.log(c());
//     console.log(myname);
//     console.log(b());
// }
// a()


// const fname = 'abd'
// function sj(){
//     console.log(fname);
// }
// sj()


// function a(){
//     const b=function(){
//         const lname = 'jksdf'
//     }
//     const c=()=>{
//         console.log(lname);
//     }
//     c()
// }
// a()

/*-------- Function Returning a Function --------*/
// function hello(){
//     function world(){
//         return 'Hello Geetika'
//     }
//     return world()
// }
// const abc = hello()
// console.log(abc);


/*--------- IIFE (Immediately Invoked Function Expression) ----------*/

// (function () {
//     console.log('Hello geeta');    
// })();

// (() => {
//     console.log('Hello shweta');    
// })();

//Q.1 Function should return avalue 1 if number is Armstrong otherwise it returns 0 if not.
// const armstrong= function(num='654'){
//   let rem, mul = 0, Newnum = num, count = 0, temp = num;
//   for(;Newnum>0;){
//       Newnum = Math.floor(Newnum / 10)
//       console.log(Newnum)
//       count++
//   }
//   console.log(count)
//   for(;num>0;){
//       rem = num % 10 
//       mul = mul + Math.pow(rem, count)
//       num = Math.floor(num / 10)
//   }
//   console.log(mul)
//   if(mul===temp){
//       console.log("Number is Armstrong")
//   }
//   else{
//       console.log("Number is not a n armstrong")
//   }
// }

// armstrong(153)

//Q2. Function should return fibonacci series.

// const fibbo = function(num){
//      let number= 10;
//       let num1=0, num2=1, num3
//       for(let i=1; i<=num; i++){
//             console.log(num1);
//             num3= num1+num2
//             num1=num2
//             num2=num3
//       }
//       console.log(num2);
// }
// fibbo(5)

// Q3. Write a MENU Driven program using separate function to calculate and return the answer of
//  the following options from a given sentence:*`

// a) Total number of digits present in it.

// const count=(num)=>{
//       console.log(Math.ceil(Math.log10(num)));
// }
// count(24536)

// countdigit(23456);

// b) Total number of small letters and capital letters present in it.

// c) Total number of alphabets used in it.

// d) Total number of vowels presents in it.

// e) Total Number words present in that sentence.


//Q4. To find sum of first n natural numbers

// const natural= (num) =>{
//       let sum=0, i=0
//       while(i<=num){
//             sum= sum+num
//             i++
//       }
//       console.log(sum);
// }
// natural(10)

//Q5. To check whether given number is ADAM number or not
// const adam= (num) => {
//     let rem,rem2,revs = 0,rev2 = 0, sqr2;
//     let sqr = num * num;
//     console.log(sqr);

// while (num > 0) {
//     rem = num % 10;
//     revs = revs * 10 + rem;
//     num = Math.floor(num / 10);
// }
// while (sqr > 0) {
//     rem2 = sqr % 10;
//     rev2 = rev2 * 10 + rem2;
//     sqr = Math.floor(sqr / 10);
// }

// console.log(revs);
// console.log(rev2);

// sqr2 = revs * revs;
// console.log(sqr2);
// if (sqr2 === rev2) {
//   console.log("its an adam number ");
// } else {
//   console.log("its not an adam number");
// }

// }

// adam(12)


// Q6.to find the product of middle digits of given number

// const prodmid = (num)=>{
//       let rem, mul=1
//       num = Math.floor(num / 10); 
//       while(num>9){
//             rem=num%10
//             mul=mul*rem
//             num=Math.floor(num/10)
//       }
//       console.log(mul);
// }
// prodmid(723428);

// Q7. The present population of a country is PO, and it increases by 5% every year. 
//The population (P) after n years is given by the formula: P= PO (1.05)n.
// Write a program to find the population every year for the next ten years;
// const populationCount = function (number, year) {
//   let i = 1,
//     po = 0;
//   console.log("year\tPopulation number");
//   while (i <= year) {
//     let p = number * 0.05;
//     po = number + p;
//     number = po;
//     console.log(`${i}\t${po.toFixed(2)}`);
//     i++;
//   }
// };
// populationCount(800, 10);

// Q8. Generate the following series://Note: you can use any predefined methods of Math class.
//1 2 4 7 11 16 22

// const series= function(){
//   let num=1
//   for(let i=0; i<7; i++){
//     num= num+i
//     console.log(num);
    
//   }
// }
// series()
//0 1 3 6 10 15 21
// const series= function(num){
//   let n=0, i=0
//   while(i<num){
//     console.log(n);
//     i++
//     n=n+i
    
//   }
// }
// series(7)
/// c) 0 3 8 15 24 35
// const series = () => {
//     let i = 0;
//     let num = 0;
//     let n = 0;
//     let array = [2, 6, 8, 10, 12];
//     let index = 0;

//     while (i < 7 && index < array.length) {
//         console.log(i);
//         i += array[index];
//         index++;
//     }
// }

// series();

//  1 2 2 4 8 32
// const series = () =>{
//     let array = [ 1, 2, 2, 4, 8, 32]
//     let i = 0
//     while(i<array.length){
//         console.log(array[i]);
//         i++
//     }
// }
// series()

//  2 3 4 6 6 9 8 12 10 15
// const series = () =>{
//     let array = [ 2, 3, 4, 6, 6, 9, 8, 12, 10, 15]
//     let i = 0
//     while(i<array.length){
//         console.log(array[i]);
//         i++
//     }
// }
// series()


//  1 5 2 4 3 3 4 2 5 1
// const series = () =>{
//     let array = [1,5,2,4,3,4,2,5,1]
//     let i = 0
//     while(i<array.length){
//         console.log(array[i]);
//         i++
//     }
// }
// series()

//  0 7 26 63 124
// const series = (n) =>{
//     let  i = 0, num
//     while(i<=n){
//         num =Math.pow(i, 3) - 1
//         if(num>=0){
//             console.log(num);
//         }
//         i++
//     }
// }
// series(5)

//  S = (1+2) + (1+2+3) + (1+2+3+4) + ………… + (1+…………+15)

// let series = "", currentSum = 0;

// for (let i = 1; i <= 15; i++) {
//     currentSum += i;
//     series += "(1";
//     for (let j = 2; j <= i; j++) {
//         series += "+" + j;
//     }
//     series += ") ";
// }
// console.log(series);


// Q9. Write a program to display the factorial of the first ten natural numbers.*`;
// const factorial= (num)=>{
//       for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//           let factor = i;
//           console.log(factor);
//         }
//       }
// }
// factorial(10)

//Q10. Write a program to generate all Perfect numbers up to 1000
 
// const perfect = function(num){
//   let sum = 0;
//   for(let i=0; i<num; i++){
//       if(num%i==0){
//           sum = sum + i
//       }
//   }
//   console.log((sum===num)?'perfect number':'not a perfect number')
// }
// perfect(28)

//Q9.Write a program to display the factorial of the first ten natural numbers.
// const facto= ()=>{
//       let num = 10
//       let i = num, mul = 1
//       while(i>0){
//        mul= mul * i
//        i--
//       }
// console.log("the factorial of the given number is: ",mul)
// }
// facto()

//Q10. Write a program to generate all Perfect numbers up to 1000.

// const perfect= ()=>{
//        let num, sum = 0
//       for(let i=1; i<1000; i++){
//             if(num%i==0){
//             sum = sum + i
//       }
//       }
//   console.log(sum === num);
  
// }
// perfect()

//Q11. Write a program to accept a number then print the sum  number of digits present in it.

// const digit = function(num){
//        let rem, sum=0
//       while(num>0){
//             rem = num%10
//             sum=sum+rem
//             num= Math.floor(num/10)
//       }
//       console.log(sum);
// }

// digit(235)

//Q12. Write a program to check whether all digits of the given number are same type or not 
//(i.e. all are odd, all even numbers or both present)

// const check = function(num){
//       let even=0, odd=0
//       if(num%2===0){
//             even++    
//       }
//       else{
//           odd++  
//       }
//       num= Math.floor(num/10)
//       console.log("even count is " +even);
//       console.log("odd count is " +odd);
      
// }
// check(23225)

//Q13. Write a program to accept a number and then add all digits until you found a single 
//digit number. If that single digit number is 1, then that number is called lucky number. 
//(e.g. if number is 2345 then sum of its digits becomes 14, further sum of these digits is 5, so the number is not a lucky number)

// const lucky= function(){
//       let num = 1;
//       let sum = 0,
//         rem;
//       while (num > 0 || sum > 9) {
//         if (num === 0) {
//           num = sum;
//           sum = 0;
//         }
//         rem = num % 10;
//         sum += rem;
//         num = Math.floor(num / 10);
//       }
//       console.log(sum);
//       if(sum===1){
//             console.log("lucky number");
//       }
//       else{
//             console.log("not lucky number");
//       }

// }
// lucky()

// Q.14Write a program to accept any 10 numbers. Then count how many numbers are odd, even 
//or zero among them.
// const check = function(){
//       let even = 0,odd = 0, zero=0;
//       for(let i=0; i<10; i++){
//             let num= Number(prompt("enter the numbers"))
//             if(num===0){
//                   zero++
//             }
//             else if(num%2===0){
//                   even++
//             }
//             else{
//                   odd++
//             }

//       }
//       console.log("even count is " +even);
//       console.log("odd count is " +odd);
//       console.log("zero count is"+zero);
      
// }
// check()


// Q15 `*Write a program to accept any 10 numbers. Then count how many numbers are positive, negative or zero among them`* 
// const positive = function(){
//       let pos=0, neg=0, zero=0
//       for(let i=0; i<10; i++){
//             let num= Number(prompt("enter the numbers"))
//             if(num===0){
//                   zero++
//             }else if(num>0){
//                   pos++
//             }else{
//                   neg++
//             }
//       }
//       console.log("positive count is " +pos);
//       console.log("negative count is " +neg);
//       console.log("zero count is " +zero);
// }
// positive()
// Q16. `*Write a program to accept any number between 1 - 10, and then display the numberin word.*`
// let num = 2,mul = 0,rem2,rem;
// while (num > 0) {
//   rem2 = num % 10;
//   mul = mul * 10 + rem2;
//   num = Math.floor(num / 10);
// }
// console.log(mul);
// let value = "";
// while (mul > 0) {
//   rem = mul % 10;

//   switch (rem) {
//     case 0:
//       value += "zero ";
//       break;
//     case 1:
//       value += "One ";
//       break;
//     case 2:
//       value += "two ";
//       break;
//     case 3:
//       value += "three ";
//       break;
//     case 4:
//       value += "four ";
//       break;
//     case 5:
//       value += "five ";
//       break;
//     case 6:
//       value += "six ";
//       break;
//     case 7:
//       value += "seven ";
//       break;
//     case 8:
//       value += "eight ";
//       break;
//     case 9:
//       value += "nine ";
//       break;
//     default:
//       console.log("none");
//       break;
//   }

//   mul = Math.floor(mul / 10);
// }
// console.log(value);

// Q17. Write a program to accept 10 numbers. Display the second highest number among them.
// const second= function(){
//   i=1, array=[ ], num
//   while(i<=10){
//    num=prompt('enter the number')
//     array.push(num)
//     i++
//   }
//   array.sort((a,b) => b - a)
//   console.log(array[1]);
  
// }
// second()


// Q18.  Write a program to accept 10 numbers and count how many numbers are divisible by 2 & 3 among them.
// const divisible= function(){
//   let i=0, num, count=0
//   while(i<10){
//     num= Number(prompt('enter a number'))
//     if(num%2==0 && num%3==0){
//       console.log("numbers are divisible " +num);
//       count++
//     }
//     i++
//   }
//   console.log("total count is " ,count);
  
// }
// divisible()

// Q19. Write a  function primeCheck(int num) to check whether a given number is Prime or not. Function should return a value 1 if number is prime otherwise it return 0 if not.
// const prime = function(num){
//   for(let i=2; i<=Math.sqrt(num); i++){
//     if(num%i==0){
//       return 0
//     }else{
//       return 1
//     }
//   }
// }
// let op= prime(151)
// console.log(op);

// Q20.  the function accepts a number and finds whether it is even and divisible by 8 or not. 
//It returns '1' if condition is satisfied otherwise '0'. 
// const even = function(){
//   let num= 16
//   if(num%2==0 && num%8==0){
//     return 1
//   }else{
//     return 0
//   }
// }
// even()
// Q21. define a method f1() to calculate and print hcf (highest common factor) by division method of 
//any two given numbers entered by user. Define another method f2() to calculate and print the area and perimeter 
//of a rectangle by using the required parameters accepted. Define main class to input the parameters required 
//in the above two methods and also call the two functions.

// const f1 = (a, b) => {
//   let num = 1;
//   // By modules way
//   while (b !== 0) {
//     num = Math.floor(a / b);
//     let sub = num * Math.min(a, b);
//     let num2 = Math.max(a, b) - sub;
//     a = b;
//     b = num2;
//   }
//   console.log(`highest common factor of ${a} and ${b} is`, a);
// };
// const f2 = (lenght, width) => {
//   let area, perimeter;
//   area = lenght * width;
//   console.log("Area of rectangle", area);
//   perimeter = 2 * (lenght + width);
//   console.log("Area of Perimeter", perimeter);
// };
// function main() {
//   f1(48, 18);
//   f2(54, 23);
// }
// main();





// Q22 Write a program to print the few lines of the following patter (number of lines is given by user). Use
// Q23. one function for printing alphabets and another function to print the number.
//   A A A A A 1
//   B B B B 1 2
//   C C C 1 2 3
//   D D 1 2 3 4
//   E 1 2 3 4 5

// const print= ()=>{
//   let alphabets = ['A','B','C','D','E']
//   let num = [1,2,3,4,5]
//   for(let i=0; i<5; i++){
//     let line=" ";
//     for(let j=0; j<5-i; j++){
//       line += alphabets[i] + " "
//     }
//     for(let k=0; k<=i; k++){
//       line+=num[k] + " "
//     }
//     console.log(line);
    
//   }
// }
// print()
// Q24. The number 151 is a prime palindrome, because it is both a prime number and a palindrome. 
//Write a class that find all prime palindromes between two given numbers a and b. Accept the values for a and b from the user in function main().
// function isPrime(num) {
//   if (num === 1 && num === 2 && num === 0) "Its a prime number";
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return 0;
//   }
//   return 1;
// }
// const ispallindrome = (num) => {
//   let newNum = num,
//     rem,
//     mul = 0;
//   while (num > 0) {
//     rem = num % 10;
//     mul = mul * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   if (mul === newNum) return 1;
//   else return 0;
// };

// const main = (a, b) => {
//   let i = a;
//   while (i <= b) {
//     if (isPrime(i) && ispallindrome(i)) {
//       console.log("The numbers are ", i);
//     }
//     i++;
//   }
// };
// main(2, 19);

// Q26. Write a program to print all elements of Fibonacci series (between 1 to 1000),
//which is also a prime +number using a defined function.

// const fibb= function(num){
//   if (num === 1 && num === 2 && num === 0) "Its a prime number";
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return 0;
//     }
//     return 1;
// }
// const primefib =()=>{
//   let num= 1000, fib=0, num1=0, num2=1
//   while(fib<num){
//     if(fibb(fib)){
//       console.log(fib);
//     }
//     num1=num2
//     num2=fib
//     fib= num1+num2
//   }
// }
// primefib()

//Q spy number

let num= 132
let rem, rev=0,rev2=1

while(num>0){
      rem= num%10
      rev= rev+rem
      rev2= rev2*rem
      num= Math.floor(num/10)
}
console.log(rev);
console.log(rev2);
if(rev===rev2){
      console.log("spy number");
      
}else{
      console.log("not spy number");
      
}




