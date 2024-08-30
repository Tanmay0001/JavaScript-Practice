// function myFunction() {
//     console.log("Welcome to Apna College!");
//     console.log("We are starting JavaScript");
// }
// myFunction();


// function myFunction(msg) {
//     console.log("SeetaRam");
// }
// myFunction("msg");

// Function to print sum of 2 no.s
// function sum(x,y) {
//     console.log(x+y);
// }

// function sum(x, y){
//     s = x+y;
//     return s;
// }
// let val = sum(3,6);
// console.log(val);

// ARROW FUUNCTION - to write function in compact way

// const arrowSum = (a, b) => {
//     console.log(a+b);
// };

// Create a function using the "function" keyword that takes a string as an argument & returns the no. of vowels in the string.

// function countVowels(str) {
//     let count = 0;
//     for (const char of str){
//         if (
//           char === "a" ||
//           char === "e" || 
//           char === "i" || 
//           char === "o" ||
//           char === "u")
//           {
//             count ++;
//           }
//         }
//     return count;
// }



//  Create an arrow function to perform the same task

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str){
//         if (
//           char === "a" ||
//           char === "e" || 
//           char === "i" || 
//           char === "o" ||
//           char === "u"
//         )
//           {
//             count ++;
//           }
//         }
//     return count;
// };



//  ForEach Loop in Arrays 

// let arr = [1,2,3,4,5,,6,7,8,9.0];
// arr.forEach((val) => {
//     console.log(val);
// }); 


// //  for a given array of no.s, print the square of each value using the forEach loop.
// let nums = [1, 2, 3, 4, 5, 6, 7];
// nums.forEach(num => {
//     console.log(num * num);
// });




// More array method
// Map Method in array

// let nums = [67, 52, 39];
// let newArr = nums.map((val) =>{
//     return val;
// });
// console.log(newArr);
// let calcSquare = (num) => {
//     console.log(num * num);
// };

//  Filter method in array
// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
// });
// console.log(evenArr);





// //  We r given array of marks of students. Filter out of the marks of the student that scored 90.
// let marks = [97, 94, 79, 77, 89, 93];
// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers)








//  TAke a no. n as input from user. Create an array of no.s from 1 to n.
// Use the reduce method to calculate sum of all Numbers in the Array.
// Use the reduce method to cacuate product of all numbers in the Array.

// let n = prompt("Enter a no.:");
// let arr =[];
// for(let i=1; i<n; i++){
//     arr[i-1]= i;

// }
// console.log(arr);

// let sum = arr.reduce((res, curr) =>{
//     return res + curr;
// });
// console.log("sum = ",sum);

// let factorial = arr.reduce((res, curr) =>{
//     return res * curr;
// });
// console.log("factorial =", factorial);