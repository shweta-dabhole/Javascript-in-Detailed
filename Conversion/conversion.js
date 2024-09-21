/*========== Implicit Conversion ==========*/
// --- Number to String ---
// let num = 276
// console.log(typeof num);
// let str = ''+num
// console.log(typeof str);

//2. Template literal
// let num = 42;
// let str = `The answer is ${num}`; // Implicit conversion
// console.log(str); // Output: "The answer is 42"

//--- String to number ---
//1. Arithmetic Operations:
// let str = "42";
// let result = str - 0 ; // Implicit conversion
// console.log(result); // Output: 42
// console.log(typeof result);

/*========= Explicit Conversion ===========*/
//=== Number to string ===
//1. Using String Function:
// let num = 42;
// let str = String(num); // Explicit conversion
// console.log(str); // Output: "42"

//2. Using toString Method:
// let num2 = 6534
// let str2 = num2.toString()
// console.log(str2);

//=== string to number ===
//1. Using Number function
// let str = "42";
// let num = Number(str); // Explicit conversion
// console.log(num); // Output: 42

//2. Using parseInt Function:
// let str = "42";
// let num = parseInt(str); // Explicit conversion
// console.log(num); // Output: 42

//3. Using ParseFloat Function:
// let str = "42.42";
// let num = parseFloat(str); // Explicit conversion
// console.log(num); // Output: 42.42

//4. unary plus operator
//let str = "42";
//let num = +str; // Explicit conversion
//console.log(num); // Output: 42
