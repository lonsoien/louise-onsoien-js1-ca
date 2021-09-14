const url = "https://thronesapi.com/api/v2/Characters"; 

const detailCharacter = document.querySelector(".detailCharacter");

async function gameOfthrones() {
    const response = await fetch(url); 
    const results = await response.json(); 

    console.log(results); 

    