//String - set of Characters

//let fName = 'Vitthal'
//String - V i t t h a l
//Index  - 0 1 2 3 4 5 6
//console.log(fName[7]);

// let fname = 'vitthal'
// fname='geetika'
// //length property is used to check length of the arrays and string
// console.log(fname.length);

// let fullname = 'Vitthal korvan'
// console.log(fullname.length);//14
// console.log(fullname[4]);//h
// console.log(fullname[fullname.length-2]);//a
// console.log(fullname[fullname.length]);//undefined

// for(let i = 0 ; i<fullname.length; i++){
//       console.log(fullname[i]);
// }

/*--------- Anagram ----------*/
// let str1 = 'naman'
// let str2 = 'naman'

// let reverse=''
// for(let i =str1.length-1;i>=0 ;i--){
//       reverse+=str1[i]
// }
// if(str1===str2) console.log('Anagram');

/*------------- length property ---------*/
// let fname = 'shweta'
// console.log(fname.length);//6

/*---------- CharAt() ---------*/
// let str = "Hello, World!";
// console.log(str.charAt(0)); // H
// console.log(str.charAt(7)); // W
// console.log(str.charAt(str.length - 1)); // !

/*----------- concat() ---------*/
// let str1 = "Hello";
// let str2 = "World";
// let str3 = "!";
// console.log(str1.concat(", ", str2, str3)); // "Hello, World!"
// console.log("".concat(str1, " ", str2)); // "Hello World"
// console.log("".concat(str1)); // "Hello"

/*---------- Includes()---------*/
//Syntax:
//string.includes('str-elem', start-index)
// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("quick")); // true
// console.log(sentence.includes("Quick")); // false
//console.log(sentence.includes("lazy", 30)); // true

/*=========== indexOf() ========= */
// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.indexOf("quick")); // 4
// console.log(sentence.indexOf("fox")); // 16
// console.log(sentence.indexOf("cat")); // -1

/*========== slice(startIndex, endIndex) ===========*/
// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.slice(4, 9)); // "quick"
// console.log(sentence.slice(16)); // "fox jumps over the lazy dog."
// console.log(sentence.slice(-9, -3)); // "lazy d"

/*========== split(separator, limit) ===========*/
// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.split(" "));
// ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
// console.log(sentence.split(" ", 5));
// ["The", "quick", "brown", "fox"]
// console.log(sentence.split("o"));
// ["The quick br", "wn f", "x jumps ", "ver the lazy d", "g."]

/*========= toLowerCase() =========*/
// let sentence = "The Quick Brown Fox.";
// console.log(sentence.toLowerCase()); // "the quick brown fox."
// console.log("HELLO WORLD".toLowerCase()); // "hello world"
// console.log("JavaScript".toLowerCase()); // "javascript"

/* ======= toUpperString() =======*/
// let sentence = "The Quick Brown Fox.";
// console.log(sentence.toUpperCase()); // "THE QUICK BROWN FOX."
// console.log("hello world".toUpperCase()); // "HELLO WORLD"
// console.log("JavaScript".toUpperCase()); // "JAVASCRIPT"

/*============= trim() ===========*/
// let greeting = "   Hello, World!   ";
// console.log(greeting.trim()); // "Hello, World!"
// console.log("   Hello".trim()); // "Hello"
// console.log("World!   ".trim()); // "World!"

/*============= replace(searchValue, newValue) =========*/
//let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.replace("fox", "cat"));
// "The quick brown cat jumps over the lazy dog."
// console.log(sentence.replace(/dog/i, "elephant"));
// "The quick brown fox jumps over the lazy elephant."
// console.log(sentence.replace(/ /g, "-"));
// "The-quick brown fox jumps over the lazy dog."
// console.log(sentence.replaceAll(" ", "-"));

/*=========== padStart() and padEnd() ============*/
// const originalString = "hello";
// const paddedString = originalString.padStart(10, "Hey! ");
//  // "-----hello"
// const paddedString2 = originalString.padEnd(12, " Shweta"); // "hello-----"
// console.log(paddedString);
// console.log(paddedString2);

/*============== repeat() ========*/
// const originalString = "hello";
// const repeatedString = originalString.repeat(3); // "hellohellohello"
// console.log(repeatedString);

/*========== startsWith() =========*/
// const originalString = "hello world";
// const startsWithHello = originalString.startsWith("hello");
// true

/*========== endsWith() =========*/
// const originalString = "hello world";
// const endsWithWorld = originalString.endsWith("world"); // true

// anagram

// const str1 = "naman";
// const str2 = "naman";
// let reverse = "";
// for (let i = str1.length - 1; i >= 0; i--) {
//   reverse += str1[i];
// }
// console.log(reverse);
// if (reverse == str2) {
//   console.log("anagram");
// } else {
//   console.log("not anagram");
// }
