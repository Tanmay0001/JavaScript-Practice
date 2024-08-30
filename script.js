// let a = 5;
// let b = 2;
// console.log("a= ",a,  "b= ",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a %  b =", a % b);
// console.log("a ** b =", a **b);
// console.log("a = ", a, "& b = ", b);
// console.log("a++ = ", a++);
// console.log("a =", a);

// console.log("a-- =", a--);
// console.log("a = ", a);

// console.log("--a =", --a);
// console.log("a = ", a);

// assisgnmet operator

// let a = 5;
// let b = 2;
// a +=4; // a= a+4
// console.log("a = ",a);

// Comparision operator
// let a = 5;
// let b = 5;
// console.log("5==5", a == b);
// console.log("5!==5", a!== b);

// let a = 5;
// let b = "5";
// console.log("a === b", a === b); // strictt equal to


// LOGICAL OPERATOR

// let a = 6;
// let b = "5";
// Logical AND
// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond2 = ", cond1 && cond2);

// // logical OR
// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 || cond2 = ", cond1 || cond2);

// logical NOT
// let a = 6;
// let b = 5;
// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("!(6<5) = ", !(a < b));

// Conditionlal Statement

// let age = 25;

// if (age >= 18){
//     console.log("you can vote");
// }
// if (age < 18) {
// console.log("you can't vote");
// }

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

// if-else

// let mode = "white";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// ODD or Even;

// let num =12;
// if(num % 2 == 0) {
// console.log(num, "is even");
// } else {
//     console.log(num, "is not even")
// }

// IF-ELSE-ELIF

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }else if(mode === "blue"){
//     color = "blue";
// }else if(mode === "pink"){
//     color = "pink";
// }else{
//     color = "white";
// }
// console.log(color);

// // # Get user to input a No. usign prompt("Enter a no:"). Check if the no. is a multiple of 5 or Not.

// let num  = prompt("enter a no.:");

// if (num%5 == 0){
//     console.log(num, "is a multiple of 5");
// } else{
//     console.log(num, "is not multiple of 5");
// }

// // Write a code which can give grades to students according to theor scores:
// 90 - 100,A
// 70-90, B
// 60-69, C
// 50-59, D
// 0-49, E

// let score = prompt("Enter your score(0-100):");
// let grade;

// if(score >= 90 && score << 100) {
//     grade = "A";
// } else if (score >= 70 && score << 89) {
//     grade = "B";
// } else if (score >= 60 && score << 69) {
//     grade = "C";
// } else if (score >= 50 && score << 59){
//     grade = "D";
// } else if (score >= 0 && score << 49) {
//     grade = "F";
// }
// console.log("according to yr scores, yr grades was:", grade);