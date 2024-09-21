// Nested If Else : - 

// let gender = 'male';
// let age = 20;
// let drunk=false;
// if(gender === 'female' || gender==='male'){
//     if(age>=18){
//         if(!drunk){
//             console.log("Able to drive");
//         }
//         else{
//             console.log("not able");
//         }
//     }
//     else{
//         console.log('not able');
//     }
// } 
// else{
//     console.log('not able');
// }

// let a = 5
// let b = 6
// let c = 7
// let d = 4

// if(a>b){
//     if(a>c){
//         if(a>d){
//             console.log("A is greater");
//         }
//         else{
//             console.log("D is greater")
//         }
//     }
//     else{
//         console.log("C is greater")
//     }
// }
// else if(b>a){
//     if(b>c){
//         if(b>d){
//             console.log("B is greater")
//         }
//         else{
//             console.log("D is greater")
//         }
//     }
// }
// else if(d>a){
//         if(d>b){
//             if(d>c){
//                 console.log("D is greater")
//             }
//             else{
//                 console.log("C is greater")
//             }
//         }
//         else{
//             console.log("B is greater")
//         }
//     }
// else{
//     console.log("C is greater")
// }


// if(a>b){
//     if(a>c){
//        console.log('a is greater');
//     }
//     else{
//         console.log("C is greater")
//     }
// }
// else {
//     if(b>c){
//         console.log('B is greater');
//     }
//     else{
//         console.log('c is greater');
//     }
// }






// Q. 1 A company has 120 employees who are divided into four grades as follows:
// Grade    Basic( Rs. per month)       D.A.(% of Basic)        H.R.A.(% of Basic)
// 1           10,000 or more                  40%                     30%
// 2           5,000 - 10,000                  40%                     25%
// 3           < 5,000 but > 2,000             30%                     20%
// 4           2,000 or less                   30%                     15%
// If the salary which is the total of Basic, D.A., and H.R.A., is above Rs.50,000 per month then
// Income Tax at the rate of 30% of the annual salary exceeding 50,000 is deducted on monthly basis
// at source. Taking name of the employees and the Basic(monthly) pay as inputs, a pay slip, which
// contains Name, Basic monthly pay, DA, HRA, Monthly Income Tax and Net Monthly Salary, for each
// employee is to be printed. 

// let Basic_Salary =  9000
// let Gross_Salary, DA, HRA

// if(Basic_Salary>=10000){
//     DA = Basic_Salary*0.40
//     console.log("DA is: " + DA)
//     HRA = Basic_Salary*0.30
//     console.log("HRA is: " + HRA)
//     Gross_Salary = Basic_Salary + DA + HRA
//     console.log("Gross Salary: " + Gross_Salary)
//     if (Gross_Salary>50000){
//         Income =  Gross_Salary*0.30
//         console.log(Income)
//         let total_salary = Gross_Salary - Income
//         console.log("Total salary: " + total_salary)
//     }
// }
// else if(Basic_Salary>=5000 && Basic_Salary<10000){
//     DA = Basic_Salary*0.40
//     console.log("DA is: " + DA)
//     HRA = Basic_Salary*0.25
//     console.log("HRA is: " + HRA)
//     Gross_Salary = Basic_Salary + DA + HRA
//     console.log("Gross Salary: " + Gross_Salary * 12)
//     if (Gross_Salary>50000){
//         Income =  Gross_Salary*0.30
//         console.log(Income)
//         let total_salary = Gross_Salary - Income
//         console.log("Total salary: " + total_salary)
//     }   
// }
// else if(Basic_Salary<=4999 && Basic_Salary>=2000){
//     DA = Basic_Salary*0.30
//     console.log("DA is: " + DA)
//     HRA = Basic_Salary*0.20
//     console.log("HRA is: " + HRA)
//     Gross_Salary = Basic_Salary + DA + HRA
//     console.log("Gross Salary: " + Gross_Salary)
// }
// else{
//     DA = Basic_Salary*0.30
//     console.log("DA is: " + DA)
//     HRA = Basic_Salary*0.15
//     console.log("HRA is: " + HRA)
//     Gross_Salary = Basic_Salary + DA + HRA
//     console.log("Gross Salary: " + Gross_Salary)
// }


// Q. 2 Write a program to find the car bill for a particular tourist.
// Type of car       Distance                Charge             Driver.


// Maruti             ‹ = 100                Rs.800             Rs.100.
//                 >100 & < = 200          Rs.800+Rs10/km       Rs 300.
//                                           above 100
//                     >200                Rs.15per km          Rs 500


// Sumo               < = 100                 Rs.600            Rs 100.
//                 >100 & < = 200          Rs.600+Rs.8/km       Rs 300
//                                            above 100
//                     > 200               Rs. 12 per km        Rs.500

// let car = "Sumo"
// let dist=220, total, newDist
// if(car==="Maruti"){
//     if(dist<=100){
//         total = 800 + 100
//         console.log("Total bill is: " + total)
//     }
//     else if(dist>100 && dist<=200){
//         newDist = dist-100
//         total = 800 + 300 + (newDist*10)
//         console.log("Total bill is: " + total); 
//     }
//     else{
//         newDist = dist - 200
//         total = 800 + 500 + (newDist*15) + 1000
//         console.log("Total bill is: " + total);    
//     }
// }
// else{
//     if(dist<=100){
//         total = 600 + 100
//         console.log("Total bill is: " + total)
//     }
//     else if(dist>100 && dist<=200){
//         newDist = dist-100
//         total = 600 + 300 + (newDist*8)
//         console.log("Total bill is: " + total); 
//     }
//     else{
//         newDist = dist - 200
//         total = 600 + 500 + (newDist*12) + 800
//         console.log("Total bill is: " + total);    
//     }
// }