// const student = {
//     fullName: "Tanmay Mishra",  // properties
//     marks: 80,
//     printMarks: function() {  // its method
//         console.log("marks = ", this.marks); // this means student , i.e student.marks
//     }
// };

// // Now, call the method
// student.printMarks();  // This should output: marks =  80

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
// };
// const karanArjun2 = {
//     salary: 50000,
// };
// const karanArjun3 = {
//     salary: 50000,
// };
// const karanArjun4 = {
//     salary: 50000,
// };

// karanArjun.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;

 

//  Creating a class using a constructor

// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }

// setBrand(brand) {
//     this.brandName = brand;
// }
// }
// // creating a class from an object
// let fortuner = new ToyotaCar("fortuner", 30);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 10);
// console.log(lexus);



// INHERITENCE IN JS:

class Person {
    eat() {
        console.log("eat")
    }
    sleep() {
        console.log("sleep")
    }
    drink() {
        console.log("drink")
    }
}
class Engineer extends Person {
    work() {
        console.log("Solve probems, build soltions");
    }
}
let TanmayObj = new Engineer();
