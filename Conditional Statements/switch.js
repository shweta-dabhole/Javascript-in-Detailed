// let num1 = Number(prompt("Enter the first number"))
// let num2 = Number(prompt("Enter the second number"))
// let operator =prompt ("enter the opeartion to be perform: ")
// let result;

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

// switch(operator){
//     case '+':
//         result = num1 + num2
//         console.log("The Addition is " + result);
//     case '-':
//         result = num1 - num2
//         console.log("The Addition is " + result);
//     case '*':
//         result = num1 * num2
//         console.log("The Addition is " + result);
    
//     case '/':
//          result = num1 / num2
//         console.log("The Addition is " + result);
        
// }

//Q2. to check whether the entered character is vowel or not
// let char = prompt('enter the character')

// switch(char){
//     case 'a':
//         case 'A':
//         console.log(char +" this is a vowel");
//     break;   
//     case 'e':
//         case 'E':
//         console.log(char +" this is a vowel");
//         break;
//     case 'i':
//         case 'I':
//         console.log(char +" this is a vowel");
//         break;
//     case 'o':
//         case 'O':
//         console.log(char +" this is a vowel");
//         break;
//     case 'u':
//         case 'U':
//         console.log(char +" this is a vowel");
//         break;
//     default:
//         console.log("not a vowel");
        
// }


//Q3.  to read grade of a student and print the following messages*`

//(grade='s' || grade='S') = excellent*`

//(grade='a' || grade='A') =` very good*

//(grade='b' || grade='B') =` good*

//(grade='c' || grade='C') =` fair*

//(grade='y' || grade='Y') =` poor*

//(grade='f' || grade='F') =` fail*


// let grade =prompt("Enter your grade")

// switch(grade){
//     case 's':
//         case 'S':
//     console.log("Excellent");
//     break;
//     case 'a':
//         case 'A':
//     console.log("very good");
//     break;
//     case 'b':
//         case 'B':
//     console.log("good");
//     break;
//     case 'c':
//         case 'C':
//     console.log("fair");
//     break;
//     case 'y':
//         case 'Y':
//     console.log("poor");
//     break;
//     default:
//     console.log("fail");

// }


//Q4. Takes temps in celsius or kelvin or Ft*`

//celcius == (ft-32)*5/9;*`

//ft = (ct*9)/5 +32.0;*`

//kelvin = ct + 273.03;*`

// let num = Number(prompt('enter the number'))
// let temp = prompt('enter the temperature unit')

// let c,f,k

// switch(temp){
//     case 'c':
//         f = (num*9)/5 + 32.0
//         k = num + 273.03
//         console.log(f);
//         console.log(k);
//         break
//     case 'f':
//         c = (num-32)*5/9
//         k = num+ 273.03
//         console.log(c);
//         console.log(k);
//         break
//     case 'k' :
//         c = (num-32)*5/9
//         f = (num*9)/5 +32.0;
//         console.log(c);
//         console.log(f);
//         break;
//     default:
//           console.log("error");

// }

//to find the area of different geometrical shapes such as circle, square*`

//rectangle and triangle by passing figure code as a choice*`

// let shape= prompt('enter the shape');

// switch(shape){
//   case "circle":
//     let pi=3.14;
//     let r;
//     area= pi*r
//     console.log(area);
//     break;
//     case"square":
//     let s
//     area= s*s
//     break;
//     case "rectangle":
//     let l;
//     let b;
//     area=l*b
//     console.log(area);
//    default:
//     console.log('error');
// }