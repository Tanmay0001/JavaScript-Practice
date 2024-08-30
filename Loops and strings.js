// CAlculate sum of 1 to 5
// // FOr loops
// let sum = 0;
// for(let i = 1; i<=5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("loop has ended");

// WHILE LOOP - when to stop the condt. is checked at starting.
// let i = 1;
// while(i <= 10) {
//     console.log("Apna college");
//     i++;
// }

// D0-WHILE LOOP - when to stop the condt. is checked at last., ateast 1 time it'll run

// let i = 20;
// do {console.log("SeetaRam");
//     i++;
// }
// while( i <= 10);

// Print from 1 to 100;
// let i = 1;
// do {console.log("i=", i);
//     i++;
// }
// while( i <= 5);

//  FOR IN LOOP

// let student = {
//     name:"Tanmay Mishra",
//     age :20,
//     cgpa: 7.5,
//     isPass: true
// };

// // for(let key in student) {
// //     console.log("key=", key, "value=", student[key]);
// }


// //  Print all even no.s from 0 to 100.
// for (let num = 0; num <= 100; num++) {
//     if(num%2 == 0){
//         console.log("num=", num);
//     }
// }


// Create a game where u start with any random game no., ask the user to keep guessing the game no. untill the user enters correct value.
// let gameNum = 25;
// let userNum = prompt("Enter the user no.");
// while(userNum != gameNum) {
//     userNum =prompt("you entered wrong no., guess again :");

// }
// console.log("Congratulations, you entered the right Number");

//  STRINGS

// let str = "SeetaRam";
// console.log(str[5]);

// Template strings - string INterpolation

// let obj = {
//     item: "pen",
//     price: 10
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let specialString = `This is template literal ${1 + 2 + 3}`;
// console.log(specialString);


// String methods 

// Str.toUpper -----> to convert ower case into upper case.
// let str ="Tanmay Mishra";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


// let str ="Tanmay Mishra";
// str = str.toUpperCase();
// console.log(str);

// str.toLower ------> vice-versa

// let str = "seetaram";
// str = str.toUpperCase();
// console.log(str)


// TRIM------> to remove the white spaces from starting and ending of the string
// let str ="        seetaram     ";
// console.log(str.trim());



// SLICE METHOD IN STRING
//  let str = "Mahadev"
//  console.log(str.slice(0,8));

// Concating two string
// let str1 = "Seeta";
// let str2 = "Ram";
// str1.concat(str2);
// let result = str1.concat(str2);
// console.log(result);



// Replace method in string
// let str = "hello";
// console.log(str.replace("l", "y"))


// Find character in the string

// let str = "IlovemyIndia";
// console.log(str.charAt(9));





// Prompt the user to enter their ful name. Generate  a username for them based on the input. Start username with @, 
// followed by their fll name nd ending with the fullname length.
//  eg--> username = Tommy, username be""@Tommy"

// let fullName = prompt("Enter the username without space:");
// let username = "@" + fullName;
// console.log(username);
