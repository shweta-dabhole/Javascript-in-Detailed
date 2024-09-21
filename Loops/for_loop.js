// For Loop: 

// syntax:
// for(initialization; condition; incre/decre operation){
//      logic - block of statements
//} 

// take a number from the user and show it's table

// let num = Number(prompt('enter a number'))
// let i, table
// for(i=1;i<=10;i++){
//    table = i * num 
//    console.log(table);
// }

// print the number from 1-10
// for(let i =1; i<=10; i++){
//     console.log(i);
// }


// Q1. sum = 1*2 + 2*3 + 3*4.......9*10
//          i*(i+1)
// let num = Number(prompt('enter the number'))
// let sum=0
// for( let i=0; i<10; i++){
//     sum = sum + i*(i+1)
//     console.log(sum, i + "*" +(i+1));
// }


// Q2. sum = 1*2 + 3*4 + 5*6 + ......... 11*12
//          i*2 +i+2 *2

// let num = Number(prompt('enter tha number'))
// let mul=0;
// for(let i=1; i<num; i+=2){
//     mul+= i+(i*1)
//     console.log(i +"*" +(i+1));
// }

// Q3. sum = 1**3 + 2**4 + 3**5..... +9**

// let sum=0
// for(let i=1; i<10; i++){
//     sum+= i*(i+2)
//     console.log(sum, i +"**" +(i+2));
// }


// Q4. sum = 1-2 + 3-4 + 5-6..... +9-10
// let sum =0
// for(let i=1; i<=10; i+=2){
//     sum+= i-(i+1)
//     console.log(sum, i +"-" +(i+1));
// }

// Q5. Find factors of the given number

//let num = Number(prompt('enter the number'))
// let num = 16
// for(let i=1; i<=num; i++ ){
//     if(num%i==0){
//         let factor = i;
//         console.log(factor);
//     }
// }

// Q6. wap to find perfect number.

// let num=42
// let sum=0
// for(i=0; i<num; i++){
//     if(num%i==0){
//         sum = sum + i
//     }
// }
// console.log((sum===num)?'perfect number':'not a perfect number')\


// Q7. WAP which reads a set of numbers till we enter 0 and calculate the avg

// let sum = 0, i, count = 0, avg
// let num
// for(i=1;true;i++){
//     num = Number(prompt("Enter the number: "))
//     if(num>0){
//     sum += num
//     console.log("The sum is: ",sum)
//     count++
//     }
//     else{
//         break;
//     }
// }
// console.log("Number of count: ",count)
// if(count!=0){
//     avg = sum / count
//     console.log("The average is: ",avg)
// }
// else{
//     console.log("no number is entered")
// }




// Q8. Armstrong Number or not
//153= 1^3+5^3+3^3
//      1+125+27

// let num = 9474
// let rem, mul = 0, newNum= num, count = 0, temp=num
// for(;newNum>0;){
//     newNum = Math.floor(newNum / 10)
//     console.log(newNum)
//     count++
// }
// console.log(count)
// for(;num>0;){
//     rem = num % 10 // 1
//     mul = mul + Math.pow(rem, count)
//     num = Math.floor(num / 10)
// }
// console.log(mul)
// if(mul===temp){
//     console.log("Number is Armstrong")
// }
// else{
//     console.log("Number is not a n armstrong")
// }


//Q9. pallindrome or not

// let num=Number(prompt("enter the number"))
// let mul=0, sum, newNum=num

// for(;num>0;){
//     rem = num%10
//     mul = mul*10+rem
//     num = Math.floor(num/10)
//     console.log(mul);
// }
// if(mul===newNum){
//     console.log("the number is pallindrome");
// }
// else{
//     console.log("the number is not pallindrome");
// }

//Q10. Strong number or not

// let num=145
// let Newnum = num,rem, sum=0

// for(;Newnum>0;){
//     rem = Newnum%10
//     let mul=1
//     for(i=rem; i>0; i--){
//         mul=mul*i
//     }
//     sum=sum+mul
//     console.log(sum); 
//     Newnum=Math.floor(Math.abs(Newnum/10))
// }
// console.log((sum===num)?`strong number`:`not strong number`);