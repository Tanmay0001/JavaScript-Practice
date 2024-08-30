//  ARRAYS are mutable in JS but not stringg

// let marks = [97,67,89,07,45,78];
//  console.log(marks);

// let heroes = ["Thor", "superman", "Batman", "Tommyman"];
// console.log(heroes);
// console.log(heroes.length);

//  LOOPING over array
// let heroes = ["Thor", "superman", "Batman", "Tommyman"];
// for( let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

//  print using for of
// let cities = ["delhi", "varanasi", "gurgaon", "bangalore", "newyork"];
// for(let city of cities) {
//     console.log(city.toUpperCase());
// }


//  For a given array wit marks of students--> [85,43,36,78,46,60].
// Find the average marks of the entire class
// let marks = [85,43,36,78,46,60];
// let sum = 0;
// for (let val of marks){
//     sum+= val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class =${avg}`);


// For a given array with prices of 5 items ---> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// for(let i=0; i<items.length; i++) {
    
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// ARRAY Methods
// Push():
// let foodItems = ["potato", "apple", "chips", "litchi"];
// foodItems.push("milk","butter","bread","rice");
// console.log(foodItems);

// POP():
// let foodItems = ["potato", "apple", "chips", "litchi"];
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);

// // toString():
// let foodItems = ["potato", "apple", "chips", "litchi"];
// console.log(foodItems);
// console.log(foodItems.toString());

// // CONCAT - To add 2 arrays
// let marvelHeroes = ["caption","Thor", "Ironman"];
// let dcHeroes = ["Batman", "Aquaman","superman"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);


// SlICE---> Return piece of an array without changing in original arraay

// let marvelHeroes = ["caption","Thor", "Ironman", "dr. strange", "Hulk", "Spiderman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));


// SPLICE()------> change original array(add, remove or replace)
// splice(starIdx, delCount, newEl1...) ---synatax

// let arr = [1,2,3,4,5,,7,8,9];
// // arr.splice(3,4,0);
// // arr.splice(2,0,69);
// arr.splice(3,1);



// Create an array to store companies---> "Bloomberg","Microsoft", "Uber","Google","IBM","Netflix"
// a. Remove the first company from the array
// b. remove Uber & Add Ola in its pace
// c. Add Amzon at the end

// let companies =["Bloomberg","Microsoft", "Uber","Google","IBM","Netflix"];
// // companies.shift();
// // companies.splice(3,1, "ola");
// companies.push("Amazon");