/* Alternating Caps 
1. Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

// const upper = function(){
//     let str = "I'm so happy it's Monday"
//     let str2 = ""
//     for(let i = 0; i<str.length; i++){
//         if(i%2==0){
//           str2 += str[i].toUpperCase()
//         }
//         else{
//           str2 += str[i]
//         }
//     }
//     console.log(str2);
// }
// upper()




/*  Emojify!

2. Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

// const emojis = {
//   smile: "😊",
//   angry: "😠",
//   party: "🎉",
//   heart: "💜",
//   cat: "🐱",
//   dog: "🐕",
// };

// function replaceEmojiShortcodes(str) {
//   Object.keys(emojis).forEach(code => {
//     str = str.replace(new RegExp(`:${code}:`, 'g'), emojis[code]);
//   });
//   return str;
// }

// let str1 = "I am :angry: today and feeling :smile:";
// let str2 = replaceEmojiShortcodes(str1);
// console.log(str2); 



  /* 3. Write a function that checks if a lowercase word starts and 
  ends with a colon. If it does, remove the colons and
  look up the word in the emoji object. If the word is in the 
  emojis object, return the corresponding emoji.
  If it isn't, return the original word.
  
  Example input: ":party:"
  Example output: 🎉
  
  Example input: ":flower:"
  Example output: "flower"
  
  Example input: "elephant"
  Example output: "elephant"
  */

// const emoji = (word) =>{
// const emojis = {
//   smile: "😊",
//   angry: "😠",
//   party: "🎉",
//   heart: "💜",
//   cat: "🐱",
//   dog: "🐕",
// };   
// if(word.startsWith(":") && word.endsWith(":")){
//   let key = word.slice(1, -1)
//   if(key in emojis){
//     return emojis[key]
//   }
//   else{
//     return key
//   }
// }else return word
// }
// let output = emoji(":smile:")
// console.log(output);


/* Totally Not Another FizzBuzz 

4. Scrimba CEO Per Borgen wants you to write a program to grant special bonuses 
to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. 
If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulous */

// const bonus = () =>{
//   console.log("ID\tprize");
//   for(let i = 1;i<=100;i++){
//     if(i%3==0 && i%5==0) console.log(`${i}\tJACKPOT! 1 Million and a Yacht!`);
//     else if(i%3==0) console.log(`${i}\tVacation`);
//     else if(i%5==0) console.log(`${i}\t$100,000 bonus!`);
//     else console.log(`${i}\t:(`);
//   }
// }
// bonus()


/* 
5. Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/
// const pumpkinRewards = function(){

//   const kittyScores = [
//     [39, 99, 76],
//     89,
//     98,
//     [87, 56, 90],
//     [96, 95],
//     40,
//     78,
//     50,
//     [63],
//   ];
// const kittyScorce = kittyScores.flat()
// console.log(kittyScorce);
  
//   const kittyPrizes = [
//     ["💰", "🐟", "🐟"],
//     "🏆",
//     "💐",
//     "💵",
//     ["💵", "🏆"],
//     ["🐟", "💐", "💐"],
//     "💵",
//     "💵",
//     ["🐟"],
//     "🐟",
//   ];
//   const kittyPrize = kittyPrizes.flat()
//   console.log(kittyPrize);
// }
// pumpkinRewards()


  /* How often do the letters in your name repeat? 

6. Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

// const countLetters = () =>{
//   let str = "Peggy Porth"
//   let sentence = str.toLowerCase().replace(/\s+/g, '')
//   console.log(sentence);
//   let count = {}
//   for(let char of sentence){
//     if(count[char]){
//       count[char]++
//     }
//     else{
//       count[char] = 1
//     }
//   }
//   console.log(count);
// }
// countLetters()


//7. The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

// const generateSentence = (desc, arr) =>{
//   let value = `The ${arr.length} ${desc} are ${arr.join(", ")}`
//   return `${value}`
// }
// const output = generateSentence("best fruits", ["Apples", "Bananas"])
// console.log(output);




/* 

8. Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

save - vase 

save - aesv
vase - aesv

aesv === aesv? ANAGRAM!

*/

// const twoStringAnagram = (value) =>{
//       let splitArray = value.split("").sort().join("")
//       let value2 = "gallery"
//       let splitvalue2 = value2.split("").sort().join("")
//       if(splitArray === splitvalue2){
//         console.log("Anagram");
//       }
//       else{
//         console.log("no anagram");
//       }
// }
// twoStringAnagram("allergy")



/* Find anagrams in an array   

9. When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

// const anagram = (phrase, arr) =>{
//   let cleanPhrase = str => str.replace(/\s+/g, "").toLowerCase().split('').sort().join('')
//   let normalphrase = cleanPhrase(phrase)
//   return arr.filter(word => cleanPhrase(word) === normalphrase);
// }

// let result = anagram("Bob Ziroll Scrimba Teacher",["Bobzirollscrimbateacher", "Scrimba Teacher Bob Ziroll", "randomwords", "TeacherScrimbaBobZiroll"])
// console.log(result);


/* 
10. Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// const pallindrome = function(){
//     const str = "rotator"
//     let str2 = str.split('').reverse().join('')
//     if(str===str2) return true
//     else return false
// }
// let message = pallindrome()
// console.log(message); 


/* Pizza Night? 
11. It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/



// const gameNight = function(){
//   const gameNightFood = {
//     "🍕 pizza": 3,
//     "🌮 tacos": 10,
//     "🥗 salads": 7,
//     "🍝 pasta": 5,
//   };
//   const values = Object.values(gameNightFood);  
//   const win = Math.max(...values);
//   const index = values.indexOf(win);
//   const item = Object.keys(gameNightFood)[index];  
//   console.log(`The winner is ${item} with ${win} votes!`);
// }
// gameNight()


  /* Panic function 
12. Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

// const panic = function(){
//   let str = "I'm almost out of coffee"
//   let str2 = str.toUpperCase().split(' ').join(' 😱 ') + '!'
//   console.log(str2);
// }
// panic()


/*  
13. Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/

// const passwordSet = () =>{
//   const str = "aabbccDb1212"
//   const arr = str.split('').filter((item, index) => str.indexOf(item) === index).join('').toLowerCase()
//   console.log(arr);
// }
// passwordSet()


/* Chef Mario's Recipe Book 
14. Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

// const marioMenu = function(){
//   const dupMenu = ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
//   const menu = dupMenu.filter((item, index) => dupMenu.indexOf(item) === index)
//   console.log(menu);
// }
// marioMenu()


/* We Come in Peace!   
15. We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

// const title = ":htraE no od ot ffutS";
// const messages = [
//   "maerc eci yrT",
//   "rewoT leffiE tisiV",
//   "noom eht ot snamuh etacoleR",
//   "egrahc ni stac tuP",
// ];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

// const reverseString = function(){
//   const title = ":htraE no od ot ffutS";
//   const message = title.split(' ').map(items => items.split('').reverse().join('')).join(' ')
//   console.log(message);
// }
// reverseString()

// const reverseStringInArray = function(){
//   const messages = [
//     "maerc eci yrT",
//     "rewoT leffiE tisiV",
//     "noom eht ot snamuh etacoleR",
//     "egrahc ni stac tuP",
//   ];
//   const output = messages.map(items => items.split("").reverse().join(""))
//   console.log(output);

// }
// reverseStringInArray()
/*
15. Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

// const totalAttendence = function(){
//       const arr = [1,2,3,8,9]
//       const total = arr.reduce((sum, item) => sum + item, 0);
//       console.log(total)
// }
// totalAttendence()



/* toTitleCase
16. Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/
// const toTitleCase = () =>{
//   let str = "everything, everywhere, all at once"
//   let capital = str.split(' ')
//                 .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//                 .join(' ')
//   console.log(capital);
// }
// toTitleCase()

/* 
17. First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

// const capitalizes = function(){
//   let str = "scrimba"
//   let capital = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
//   console.log(capital);
// }
// capitalizes()



/* Whispering function 
18. Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// const whispering = function(){
//   let str = "distrub!"
//   let word = "shh... "
//   let str2 = (word + str.replace("!", "")).toLowerCase())
//   console.log(str2);
//   console.log(str2.length);

// }
// const whispering = function() {
//   let str = "The KITTENS are SLEEPING!";
//   let word = "shh... ";
//   let lowerCase = str.toLowerCase()
//   if(lowerCase.endsWith("!")){
//     lowerCase = lowerCase.slice(0, -1)
//   }
//   console.log(word + lowerCase);

// }

// whispering();











































































// /* Alternating Caps 
//  Write a function that takes in a string of letters
//  and returns a sentence in which every other letter is capitalized.

// Example input: "I'm so happy it's Monday"
// Example output: "I'M So hApPy iT'S MoNdAy"
// */

// let str = "I'm so happy it's Monday";

// for(let i=2; i<str.length; i++){
//     if(str.indexOf()){
//         console.log(str.toUpperCase());
//     }
    
// }
// console.log(str);




//  Emojify!

// Popular services like Slack and Github allow for emoji shortscodes, meaning 
// they will detect when a word in a sentence begins and ends with a colon (:)
// and automatically replace that word with an emoji. 

// These shortcodes allow users to add an emoji to their messages by typing a 
// code rather than searching for an emoji from a list. 

// For example, typing :smile: will replace that text with 😊 

// */

// const emojis = {
//   smile: "😊",
//   angry: "😠",
//   party: "🎉",
//   heart: "💜",
//   cat: "🐱",
//   dog: "🐕",
// };

// /* 1. Write a function that checks if a lowercase word starts and 
// ends with a colon. If it does, remove the colons and
// look up the word in the emoji object. If the word is in the 
// emojis object, return the corresponding emoji.
// If it isn't, return the original word.

// Example input: ":party:"
// Example output: 🎉

// Example input: ":flower:"
// Example output: "flower"

// Example input: "elephant"
// Example output: "elephant"
// */
// ```

// ```jsx
// /* Totally Not Another FizzBuzz 

// Scrimba CEO Per Borgen wants you to write a program to grant special bonuses 
// to all his employees based on their employee ID numbers! 

// Scrimba has 100 employees and their employee ID numbers range from 1 - 100. 
// If the employee's ID number is: 

// Divisible by 3 - Vacation! 
// Divisible by 5 - $100,000 bonus! 
// Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
// Not divisible by 3 or 5 - :(
    
// Write a program to loop through all the ID numbers and print their prize. 
// Your function's output should look something like this: 

// 1 - :(
// 2 - :(
// 3 - Vacation! 
// 4 - :(
// 5 - $100,000 bonus!

// Hint: Remainder operator, modulo 
//  */
// ```

// ```jsx
// /* 
// Scrimba mascot Pumpkin has won the grand prize at an international 
// cat show. Below are Pumpkin's scores from the judges, as well as all the 
// prizes he's won. In all the excitement of victory,
// they've become a jumbled mess of nested arrays. Let's 
// help Pumpkin by sorting it out. 

// Write a function to flatten nested arrays of strings or
// numbers into a single array. There's a method
// for this, but pratice both doing it manually and using the method. 

// Example input: [1, [4,5], [4,7,6,4], 3, 5]
// Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
// */

// const kittyScores = [
//   [39, 99, 76],
//   89,
//   98,
//   [87, 56, 90],
//   [96, 95],
//   40,
//   78,
//   50,
//   [63],
// ];

// const kittyPrizes = [
//   ["💰", "🐟", "🐟"],
//   "🏆",
//   "💐",
//   "💵",
//   ["💵", "🏆"],
//   ["🐟", "💐", "💐"],
//   "💵",
//   "💵",
//   ["🐟"],
//   "🐟",
// ];

// /* 
// How often do the letters in your name repeat? 

// Write a function that counts how many times each letter of your name
// occurs. Your function should take in your first and last name and return
// an object where the keys are each character in your name, and the value
// is how many times that character appears in your name. 

// Example input: "Peggy Porth"
// Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

// Your function should NOT count spaces and should not be case sensitive (a
// lowercase t and a capital T should be considered the same character).

// */

// // The generateSentence(desc, arr) takes two parameterer: a description and an array.
// // It should return a string based upon the description and array.

// // Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// // it should return the string: "The 3 largest countries are China, India, USA"

// // Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// // "The 2 best fruits are Apples, Bananas"

// // Use both a for loop and a template string to solve the challenge
// ```

// ```jsx
// /* 

// Anagrams are groups of words that can be spelled with the same letters. 
// For example, the letters in "pea" can be rearrange to spell "ape", and 
// the letters in "allergy" can be rearranged to spell "gallery."

// Write a function to check if two strings of lowercase letters are anagrams. 
// Return true if the word is an anagram. Return false if it isn't. 

// Example input: "allergy", "gallery"
// Example output: true

// Example input: "rainbow", "crossbow"
// Example output: false

// save - vase 

// save - aesv
// vase - aesv

// aesv === aesv? ANAGRAM!

// */
// ```


// /* Find anagrams in an array   

// When two words have the exact same letters, they are anagrams. 

// Each item in the anagrams array is an anagram of a Scrimba teacher's
// first and last name, plus the phrase "Scrimba teacher". 

// Write a function to determine which strings in the array are 
// anagrams of "Bob Ziroll Scrimba Teacher".

// Your function should take two parameters: the phrase you want to compare to
// the anagrams, and an array of anagrams. The function should return
// a new array of anagrams that match the phrase. 

// Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
// Example output: ["tater", "teart", "tetra"]

// Bonus: What other teachers are represented in these anagrams? 
//  */
// ```

// ```jsx
// /* 
// Palindromes are words that are the same forward or backward. For example, 
// the words "noon" and "kayak" are a palindromes.
 
// Write a function to check if a lowercased string of letters is a palindrome. 
// If the word is palindrome, return true. If it isn't, return false.

// Example input: "motorbike"
// Example output: false

// Example input: "rotator" 
// Example output: true
// */
// ```

// ```jsx
// /* Pizza Night? 
// It's the weekend and you and your friends can't agree on 
// what to order for dinner, so you put it to a vote. 

// Write a function to find the food with the highest number of votes. 

// Your function should take in a food object and find the food
// with the most votes. It should log the winner, along with 
// how many votes it received.  

// Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
// Example output: The winner is 🐈 cats with 19 votes!
// */

// const gameNightFood = {
//   "🍕 pizza": 3,
//   "🌮 tacos": 10,
//   "🥗 salads": 7,
//   "🍝 pasta": 5,
// };
// ```

// ```jsx
// /* Panic function 
// Write a PANIC! function. The function should take in a sentence and return the same
// sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
// built in string methods. 

// If the string is a phrase or sentence, add a 😱 emoji in between each word. 

// Example input: "Hello"
// Example output: "HELLO!"

// Example input: "I'm almost out of coffee"
// Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

// .split() .join()



// ```jsx
// /*  
// Grandpa's hand isn't as steady as it used to be. You finally convinced him
// to start using a password manager, but he accidentally typed and saved his
// password with a bunch of extra characters. Help him recover his password by 
// removing all the duplicate characters. 

// Your function should take in a string of characters and return a
// string with the duplicate characters removed. Assume that your input
// is lowercased with only letters and numbers.  

// Example input: "aabbccb1212"
// Example output: "abc12"
// */
// ```

// ```jsx
// /* Chef Mario's Recipe Book 
// Chef Mario was in the middle of writing his cookbook masterpiece
// when he spilled coffee on his keyboard! Now all his recipes have repeat
// ingredients.

// Help save Chef Mario's cookbook by writing a function that takes in an array 
// and returns a new array with all the duplicates removed. 

// Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
// Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
// */

// ```

// ```jsx
// /* We Come in Peace!   
// We've received what (we assume) is a message of peace and brotherhood from 
// an alien planet. They almost got it right, but the messages are 
// backward. Write functions to reverse the backward messages so we can 
// read what they have to say! 
// */

// const title = ":htraE no od ot ffutS";
// const messages = [
//   "maerc eci yrT",
//   "rewoT leffiE tisiV",
//   "noom eht ot snamuh etacoleR",
//   "egrahc ni stac tuP",
// ];

// /* Step 1: Reverse a string
// Write a function that takes in a string and returns the reverse 
// of that string. An interviewer may want to check if you know your
// string methods, or may want to know if you can reverse a string manually. 
// Practice both ways! 

// Example input: !htrae ot emocleW
// Example output: Welcome to earth!

// const Welcome = ()=>{
//     let str = "!htrae ot emocleW";
//     let rev = str.split("").reverse().join("");
//     console.log(rev);
// }
// Welcome()

// ```jsx
// /*
// Alex from Scrimba wants to know how many new students have attended 
// Scrimba's weekly Town Hall event this year. 

// He has an array of first-time attendees for each month of the year. 
// Help him find the total number of attendees! Your function should
// take in an array and return a number representing the total number
// of new attendees. 

// Example input: [1,2,3]
// Example output: 6
//  */
// ```

// ```jsx
// /* toTitleCase
// Write a function that will capitalize every word in a sentence.  

// Example Input: "everything, everywhere, all at once"
// Example Output: "Everything, Everywhere, All At Once"
// */

// /* 
// First, write a function that takes in one word and 
// capitalizes the first letter of that word.

// Example Input: "scrimba"
// Example Output: "Scrimba"

// Hint: Trying using slice() and .toUpperCase()
// */

// const cap = function(){
//     let str='scrimba'
//     let str2= str.slice(0,1).toUpperCase()+str.slice(1,7)
//     console.log(str2);
    
// }
// cap()


// ```jsx
// /* Whispering function 
// Write a function `whisper` that takes in a sentence 
// and returns a new sentence in all lowercase letters with
// "shh..." at the beginning. 

// The function should also remove an exclamation point
// at the end of the sentence, if there is one. 

// Example 
// input: "The KITTENS are SLEEPING!"
// output: "shh... the kittens are sleeping"

// Hint: endsWith and slice

// const whisper = function(){
//     let str = "The KITTENS are SLEEPING!";
//     let str2 ="shh..."+str.toLowerCase()
    
//     console.log(str2);
// }
// whisper()