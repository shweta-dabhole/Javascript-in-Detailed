//1 print multiplication table
// let i = 1, num=10
// while(i<=10){
//     console.log(num*i);
//     i++
// }

//2 Print the number from 1-10
// let i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

//3 WAP sum = 1*2 + 2*3 + 3*4.......9*10
// let i = 1, sum = 0
// while(i<10){
//     sum= sum + i*(i+1)
//     i++
// }
// console.log(sum);

// 4. Sum = 1*3 + 24 + 35..... +9*11
// let i = 1, sum = 0
// while(i<=9){
//     sum = sum + i*(i+2)
//     console.log(i + "*" +(i+2))
//     i ++
// }
// console.log(sum)
// 5. Sum = 1-2 + 3-4 + 5-6 ….. + 9 -10
// let i=1, sum = 0
// while(i<=10){
//     sum = sum + i-(i+1)
//     console.log(i + "-" + (i+1))
//     i+=2
// }
// console.log(sum)
// 6. Find the factors of the given number
// let num = Number(prompt("Enter the number: "))
// let i=1, fact
// while(i<=10){
//     if(num%i==0){
//         console.log("Factors of the number: ",i)
//     }
//     i++
// }

// 7. Perfect Number or not
// let i = 0, sum = 0
// let num = Number(prompt("Enter the number: "))
// while(i<num){
//     if(num%i==0){
//         sum = sum + i

//     }
//     i++
// }
// if(num===sum){
//     console.log("The number is perfect number: ",sum)
// }
// else{
//     console.log("The number is not a perfect number: ",sum)
// }

// 8. Which reads a set of numbers till we enter 0 and calculate the average
// let sum = 0, num, avg, count = 0
// while(true){
//     num = Number(prompt("Enter the number: "))
//     if(num<=0){
//         break
//     }
//     sum += num
//     count++
// }
// console.log("Sum of the numbers are: ",sum)
// console.log("The total count is: ",count)
// if(count>0){
//     avg = sum / count
//     console.log("The total average of numbers are: ",avg)
// }
// else{
//     console.log("The count is 0")
// }

// 9. Number is palindrome or not
// let num = 121, newNum = num, rem, mul = 0
// while(num>0){
//     rem = num % 10
//     mul = mul * 10 + rem
//     num = Math.floor(num /10)
// }
// console.log(mul)
// if(mul===newNum){
//     console.log("Number is pallindrom: ",mul);
// }
// else{
//     console.log("Number is not  pallindrom: ",mul);
// }

// 10. Armstrong Number or not
// let num = Number(prompt("Enter the number: "))
// let newNum = num, rem, mul = 0
// count = Math.ceil(Math.log10(num))
// while(num>0){
//     rem = num % 10
//     mul += Math.pow(rem, count)
//     num = Math.floor(num / 10)
// }
// if(newNum===mul){
//     console.log("It's an armstrong number: ",mul)
// }
// else{
//     console.log("It's not an armstrong number: ",mul)
// }

// 11. Strong number or not
// let num = 145
// let temp = num, rem, sum =  0
// while(num>0){
//     rem = num % 10
//     let mul = 1
//     let i = rem
//     while(i>0){
//         mul *= i
//         i--
//     }
//     sum += mul
//     num = Math.floor(num / 10)
// }
// console.log((sum===temp)?strong `:`not a strong);

// 1.To find sum of first n natural numbers.
// let i = 1, sum = 0
// let n = Number(prompt("Enter the nth number: "))
// while(i<=n){
//     sum += i
//     i++
// }
// console.log("nth number is ",n)
// console.log("Sum of the nth number is: ",sum)

// 2.Take n numbers from keyboard print positive numbers sum and negative numbers sum.
// let n = Number(prompt("Enter the nth number: "))
// console.log("nth number is: ",n)
// let i=1, pos = 0, neg = 0, num
// while(i<=n){
//     num = Number(prompt("Enter the number: "))
//     if(num>0){
//         pos = pos + num
//         console.log("positive ",pos)
//     }
//     else if(num<0){
//         neg = neg + num
//         console.log("negative ",neg)
//     }
//     i++
// }
// console.log("Sum of the positive numbers are: ",pos)
// console.log("Sum of the negative numbers are: ",neg)

// 3.Take n numbers from keyboard print positive numbers sum and negative numbers
//sum until 0 is encountered.
// let num, pos=0, neg=0, i =1
// while(true){
//     num = Number(prompt("Enter the number: "))
//     if(num>0){
//         pos += num
//     }
//     else if(num<0){
//         neg += num
//     }
//     else{
//         break
//     }
// }
// console.log("Sum of the positive number: ",pos)
// console.log("Sum of the negative number: ",neg)

// 4.To find sum of individual digits of  given number.

// let num = 345, rem, sum = 0
// while(num>0){
//     rem = num % 10
//     sum += rem
//     num = Math.floor(num / 10)
// }
// console.log(sum)

// 5.repeat the sum of the user given number until you get single digit.

// let num= 12345
// let sum=0, rem
// while(num>0 || sum>9){
//     if(num===0){
//         num=sum
//         sum=0
//     }
//     rem=num%10
//     sum+=rem
//     num=Math.floor(num/10)
// }
// console.log(sum);

// 6.to find the factorial of given number.
// let num = Number(prompt("Enter the number: "))
// let i = num, mul = 1
// while(i>0){
//     mul= mul * i
//     i--
// }
// console.log("the factorial of the given number is: ",mul)

// 7.to find the occurrence of the digit in the given number.

// let num=122232222222
// let digit=2

// let rem, count=0
// while(num>0){
//     rem=num%10
//     if(rem===digit){
//         count++
//     }
//     num=Math.floor(num/10)
// }
// console.log(count);

// 8.to find the product of middle digits of given number.

// let num=Number(prompt("enter the number"))
// num= Math.floor(num/10)
// let rem, mul=1
// while(num>9){
//     rem=num%10
//     mul=mul*rem
//     num=Math.floor(num/10)
// }
// console.log(mul);

// 10.To check whether given number is ADAM number or not

//        12^2 = 144 --> reverse 12 and square

//        21^2 = 441 --> reverse the 441 and check with 144

// let num = 12;

// let rem,
//   rem2,
//   revs = 0,
//   revs2 = 0,
//   sqrt2;

// let sqr = num * num;
// console.log("square of the number is: ", sqr);

// while (num > 0) {
//   rem = num % 10;

//   revs = revs * 10 + rem;

//   num = Math.floor(num / 10);
// }

// while (sqr > 0) {
//   rem2 = sqr % 10;

//   revs2 = revs2 * 10 + rem2;

//   sqr = Math.floor(sqr / 10);
// }

// console.log("reverse of the number is: ", revs);

// console.log("reverse of the square of the number is:", revs2);

// sqrt2 = revs * revs;
// console.log(sqrt2);
// if (sqrt2 === revs2) {
//   console.log("its an adam number ");
// } else {
//   console.log("its not an adam number");
// }

// 11.To find the largest digit in given number.

// let num= 1345
// let rem,  n=0

// while(num>0){
//     rem=num%10
//     n = Math.max(rem, n)
//     num=Math.floor(num/10)
// }
// console.log(n);

// let num = 56439876;
// let largest = 0,
//   rem;

// while (num > 0) {
//   rem = num % 10;
//   if (rem > largest) largest = rem;
//   num = Math.floor(num / 10);
// }
// console.log(largest);

// 12.convert digits of number into words.

// let num = 2354565,
//   mul = 0,
//   rem2,
//   rem;
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



// Q swap first and last digit of number
// let num = 68953
// let firstDigit = num % 10;
// console.log(firstDigit);
// let rem,rev=0,rev2 =0, 
//   lastDigit,
//   temp = Math.floor(num / 10),
//   temp2 = temp;
// console.log(temp);

// while (temp > 0) {
//   rem = temp % 10;
//   console.log(rem);
//   lastDigit = rem;
//   temp = Math.floor(temp / 10);
// }
// console.log(lastDigit);

// while (temp2 > 9) {
//   rem = temp2 % 10
//   rev = rev*10 + rem
//   temp2 = Math.floor(temp2/10)
// }

// while(rev>0){
//     rem = rev%10
//     rev2 = rev2*10 + rem
//     rev = Math.floor(rev/10)
// }
// console.log(rev2);

// let lastNumber = rev2*10 + lastDigit
// console.log(lastNumber);

// let totalDigit = (Math.ceil(Math.log10(lastNumber)))

// let finalNumber = (firstDigit * Math.pow(10,totalDigit)) + lastNumber
// console.log(finalNumber);