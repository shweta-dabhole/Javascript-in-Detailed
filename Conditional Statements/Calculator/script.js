let num1 = Number(prompt("Enter the first number"))
let num2 = Number(prompt("Enter the second number"))
let ope =prompt ("enter the opeartion to be perform: ")

let res;
if(ope=="+"){
    res= num1+num2
    console.log("the addition is " +res)
}
else if(ope=="-"){
    res= num1-num2
    console.log("the subtraction is " +res);
}
else if(ope=="*"){
    res= num1*num2
    console.log("the multiplication is " +res);
}
else if(ope=="/"){
    res= num1/num2
    console.log("the division is " +res);
}
else{
    console.log("error");
}