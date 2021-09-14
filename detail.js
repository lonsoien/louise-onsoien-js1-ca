const container = document.querySelector(".container");

const url = "http://127.0.0.1:5500/details.html?id=0" + id;

console.log(url); 

const queryString = document.location.search; 

const params = new URLSearchParams(queryString); 

const id = params.get("id");

console.log(id); 

async function gameOfthrones() {
    const response = await fetch(url); 
    const results = await response.json(); 

    console.log(results); 

    results.forEach(function(characters) {
        container.innerHTML += `<div>${characters.id}" class="character"></div>
        <h2>${characters.fullName}</h2> 
        <img src="${characters.imageUrl}" alt="${characters.fullName}" />
         belongs to <h3>${characters.family}</h3>
         also known as <h4>${characters.title}</h4>`; 
    });
}

gameOfthrones();