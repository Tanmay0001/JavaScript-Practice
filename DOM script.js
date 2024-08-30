// // // // let heading = document.getElementById("heading");
// // // // console.dir(heading);
// // // let headings = document.getElementsByClassName("heading-class");
// // // console.dir(headings);
// // // console.log(headings);


// // // // Using query selector:
// // //  elements = document.querySelector(".myClass"); // It will return the first element
// // //  console.dir(elements);

// // // let allEl = document.querySelectorAll(".myClass");
// // // console.dir(allEl) // for returning all elements

// // // console.dir(document.body.firstchild);

// // // let div = document.querySelector("div");
// // // console.log(div);

// // // let id = div.getAttribute("id");
// // // console.log(id);

// // // // for getting paragraph
// // // let para = document.querySelector("p");
// // // // console.log(para.getAttribute("class"))
// // // console.log(para.setAttribute("class", "newClass"));

// // //  Accesing the style in js;
// // // let div = document.querySelector("div");
// // // div.style.backgroundColor = "green";

// // // div.style.fontSize = "26px";
// // // div.innerText = "Hello!";


// // // Creating a neew button in JS

// // // let newBtn = document.createElement("button");
// // // newBtn.innerText = "click me!";
// // // console.log(newBtn);

// // // // inserting a new button at the end of the button

// // // let div = document.querySelector("div")
// // // //div.append(newBtn); //at the end
// // // // div.prepend(newBtn); ///at the begining
// // // // div.before(newBtn); 
 

// // // Adding  a new Heading-
// // let newHeading = document.createElement("h1");
// // newHeading.innerHTML = "<i>Hi, I'm new!</i>";

// // document.querySelector("body").prepend(newHeading);

// // //  delelting the heading
// // let para = document.querySelector("p");
// // para.remove();

// // //  removing the heading
// // newHeading.remove();



// //  Create a new button element Give it a text"click me", background colour of red and text colour of white.
// //  Insert the button as the first element inside the body tag.

let button = document.createElement("button");
button.innerText = "Click me";
button.style.color = "white";
button.style.backgroundColor = "red";

document.querySelector("body").prepend(button);


// Create a <p> tag in html, give it a class and some styling.
// Now create  a new class in CSS and try to append this class to the <p> element.
// Did u notice , how u overright the class name when u add a new one? Solve this problem using classList.
// soln
let para = document.querySelector("p");
