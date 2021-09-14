const container = document.querySelector(".container");

const queryString = document.location.search; 

const params = new URLSearchParams(queryString); 

const id = params.get("id");

console.log(id);

const url = "https://thronesapi.com/api/v2/Characters/2" + id;

console.log(url);

async function gameOfthrones() {
    const response = await fetch(url); 
    const results = await response.json(); 

    console.log(results); 

    makeHTML(results); 
 }

gameOfthrones();

function makeHTML(results) {
    container.innerHTML += `<div>${results.id}
       <h2>${results.fullName}</h2> 
       <img src="${results.imageUrl}" alt="${results.fullName}" />
        belongs to <h3>${results.family}</h3>
        also known as <h4>${results.title}</h4></div>`;
}