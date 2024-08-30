const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");




// let promise = fetch(URL);
// console.log(promise);

// NOW  fetching data using async-awaits

// const getFacts = async () => {
//     console.log("getting data.....");
//     let response = await fetch(URL);
//     console.log(response);//JSON format
//     let data = await response.json();
//     console.log(data[2].text);
// };

function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data);
    });
}

btn.addEventListener("Click", getFacts);