// Q1. wap in js check temperature according to the condition
// <0 very cold
// <16 cold outside
// <25 wheather is ok
// <35 let's go for swim
// <45 turn on ac
// else too hot
// let temp = prompt("Enter the temperature")

// if(temp<0){
//     console.log("temperature is very cold")
// }else if(temp<16){
//     console.log("temperature is  cold outside ")                                                                        
// }else if(temp<25){
//     console.log("wheather is ok ")
// }else if(temp<35){
//     console.log("Let's go for swim ")
// }else if(temp<45){
//     console.log("Turn on AC ")
// }else{
//     console.log("temperature is too hot")
// }

// Q2. to calculate the electricity bill read the current and previous meter reading.*`
// the charges given as follows w.r.t slabs*`
// No. of. units consumed:                       rate*`
//       0-100                                   0.80*`
//       100-200                                 1.2*`
//       200-300                                 1.5*`
//       >300                                    1.8*`

// let unit = prompt("enter current: ");

// if(unit<=100){
//     console.log(unit*0.80)
// }
// else if(unit<=200){
//     console.log(unit*1.2)
// }else if(unit<=300){
//     console.log(unit*1.5)
// }else if(unit>300){
//     console.log(unit*1.8)
// }

// let num=prompt("enter units used")

// let sum;
// if(num>0 && num<100){
//     sum = num * 0.8
//     console.log('the bill is ' +sum)
// }else if(num>=100 && num<200){
//     sum = num * 1.2
//     console.log('the bill is ' +sum)
// }else if(num>=200 && num<300){
//     sum = num * 1.5
//     console.log('the bill is ' +sum)
// }
// else{
//     sum = num * 1.8
//     console.log('the bill is ' +sum)
// }

// Q.3 to find the average marks of 3 subjects of the student and display the result as*`
// follows*`
//      Average                              Result*`
//    >=35 to <50                            3rd division*`
//    >=50 and <60                           2nd division*`
//    >=60 and <70                           1st division*`
//    >=70                                   Distinction*`
//     <35                                   Fail*`

// let subject1 = Number(prompt("enter marks of subject1 "))
// let subject2 = Number(prompt("enter marks of subject2 "))
// let subject3 = Number(prompt("enter marks of subject3 "))

// let sum = (subject1 + subject2 + subject3)
// console.log(sum)

// let avg = sum/3
// console.log(avg)

// if(avg>=35 && avg<50){
//     console.log("3rd division")
// }else if(avg>=50 && avg<60){
//     console.log("2nd division")
// }else if(avg>=60 && avg<70){
//     console.log("1st division")
// }
// else if(avg>=70 ){
//     console.log("Distinction")
// }
// else{
//     console.log("Fail")
// }


// Q.4 to calculate the gross salary of the employee for the conditions given below:

// basic sal         DA              HRA             Conveyance
// >=5000            110%            20%             500

// >=3000 && <5000   100%            15%             300

// <3000             90%             10%             200

// let sal = Number(prompt("Enter your basic salary"))
// let grossSal;
// let da;
// let hra;
// if(sal>=5000){
// da = sal*1.1;
// hra = sal*0.2;
// grossSal = sal + da + hra + 500
// console.log(grossSal)
// }
// else if(sal>=3000 && sal<5000){
// da = sal*1;
// hra = sal*0.15;
// grossSal = sal + da + hra + 300
// console.log(grossSal)
// }
// else{
// da = sal*0.9;
// hra = sal*0.10;
// grossSal = sal + da + hra + 200
// console.log(grossSal)
// }

// Q6.  wap to i/p the code of a particular item quantity purchased and rate.
// then calculate purchased price and print it along with gift to be presented.
// amount of purchase (Rs)                Gift
// between 100 to 500                   a key ring
// between 500 to 1000                 a leather purse
// above 1000                         a pocket calculator

// let item= Number(prompt("enter the item purchased"))
// let purchase;
// if(purchase<100 && purchase<=500){
//     console.log("it's a key ring")
// }else if(purchase<=500 && purchase<=1000){
//     console.log("it's a leather purse")
// }else if(purchase>1000) {
//     console.log("a pocket calculator")
// }

// Q7. wap to take salary from user find and display income tax with the help of following:
// monthly salary                               Income tax
//  8000 or less                              nil
// 8000-9000                                20% of monthly salary
//  9000-10000                              30% of monthly salary
// 10000 or above                           40% of monthly salary

// let sal=prompt("enter your salary")

// let inTax;

// if(sal<=8000){
//     inTax=sal
//     console.log(inTax)
// }else if(sal>=8000 && sal<9000){
//     inTax= (sal*0.2)
//     console.log(inTax)
// }else if(sal>=9000 && sal<10000){
//     inTax= (sal*0.3)
//     console.log(inTax)
// }else{
//     inTax= (sal*0.4)
//     console.log(inTax)

// }


// Q8. A salesman earns a commission on the value of his sales as per the following
// value of sales(Rs)                       commission
// 1-999                                        1%
// 1000-9999                                    5%
// 10000-99999                                 10%

// let sales = prompt('enter the sales: ')

// let commi;
// if(sales>=1 && sales<999){
//     commi = sales*0.01
//     console.log(commi)
// }else if(sales>=1000 && sales<9999){
//     commi = sales*0.05
//     console.log(commi)
// }else if(sales>=10000 && sales<99999){
//     commi = sales*0.1
//     console.log(commi)
// }

// Q10.  wap to find the car bill for tourist
// type of car              distance            charge          driver
// maruti                   <=100                rs.800             rs100
//                       >100 & <=200         rs.800+rs10/km        rs.300
//                                            above100
//                          >200            rs 15 per km            rs.500


// sumo                     <=100               rs600               rs.100
//                      >100 &<=200         rs600+rs8/km            rs.300
//                                              above100
//                          >200                rs.12 per km        rs.500


// let car=prompt('enter the type of the car')

// let dist=prompt('enter the distance: ')
// let bill;

// if(dist<=100){
//     bill=800+100
//     console.log(bill)
// }
// else{
//     console.log('error')




// Q.11   wap to calculate the salary increment of emplyees based on their basic salary
// calculate the final increment after incemnet
// Basic pay                      Rise
//  10700                          550
//  12500                          750
//  15000                         1050


// let basicSal = Number(prompt('enter the basic pay'))
// let incre;
// if(basicSal==10700){
//     incre=basicSal+550;
//     console.log(incre)
// }else if(basicSal==12500){incre
//     incre=basicSal+750;
//     console.log(incre)
// }else if(basicSal==15000){
//     incre=basicSal+1050;
//     console.log(incre)
// }



// Q12. wap to calculate prize amount 
// test avg                 graduate                prize amt
// >=80                        A                    1,00,000.00
// 80> & >=65                  B                    50,000.00
// 50> & >=40                  c                    25,000.00
//    <40                      D                    10,000.00

// let avg =prompt('enter your avg')
// let prize;
// if(avg>=80){
//     prize=100000.00;
//     console.log(prize)
// }else if(avg>80 && avg>=65){
//     prize=50000.00;
//     console.log(prize)
// }else if(avg>50 && avg>=40){
//     prize=25000.00;
//     console.log(prize)
// }
// else{
//     prize=10000.00
//     console.log(prize)
// }


// Q13. 55 employees in an organisation. u have to display no. of  emp getting net salary
// above 20000 by taking basic salary as input.

// Basic Salary                    DA(%basic salary)          IT(%gross salary)
// below 5000                           8%                          6%
// 5000 to <10000                      15%                          9%
// 10000 and above                     18%                          12%

// gross-salary=basic salary+ DA
// net salary=gross salary-IT


// let basic=Number(prompt('enter your basic salary:'))

// let gross;
// let netSalary;

// if(basic<5000){
//     gross=basic+(basic*0.08)
//     netSalary= gross-(basic*0.06)
//     console.log(netSalary)
// }else if(basic<=5000 && basic<10000){
//     gross=basic+(basic*0.15) 
//     netSalary= gross-(basic*0.09)
//     console.log(netSalary)
// }else {
//     gross=basic(basic*0.18) 
//     netSalary= gross-(basic*0.12)
//     console.log(netSalary)
// }

// Q14.  wap to assign a valeus the var basic salary and calculate DA and the gross salary
// and print them the DA is calculated as per the rules given below:

// if basic <2000                   then DA is 5% of basic
// if basic >=2000 &<7000                   then DA is 8% of basic
// if basic >=7000 &<10000                   then DA is 10% of basic
// if basic >=10000                   then DA is 12% of basic

// gross_salar=basic+DA

// let basic =prompt('enter your basic salary')
// let DA;
// let gross;
// if(basic<2000){
//     DA= (basic*0.05)
//     gross=basic+DA
// }else if(basic>=2000 && basic<7000){
//     DA= (basic*0.08)
//     gross=basic+DA
// }else if(basic>=7000 && basic<10000){
//     DA= (basic*0.10)
//     gross=basic+DA
// }
// else{
//     DA= (basic*0.12)
//     gross=basic+DA
// }


