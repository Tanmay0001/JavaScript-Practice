// let btn1 = document.querySelector("#btn1");
// // btn1.oneclick = () => {
// //     console.log("btn1 was clicked");
// //     let a = 25;
// //     a++;
// //     console.log(a);
// // }

// // let div = document.querySelector("div");
// // div.onmouseover = () =>{
// //     console.log("you are inside div");
// // };

// btn1.addEventListener("click", (evt) =>{
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// btn1.addEventListener("click", () =>{
//     console.log("button was clicked - handler2");
// });

// let div = document.querySelector("div");



// Create a toggle button that changes the screen to dark-mode when clicked & ight-mode when clicked again.
let modeBtn = document.querySelector("#mode"); // Corrected 'ddocument' to 'document'
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});
