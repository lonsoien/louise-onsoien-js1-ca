const url = "https://thronesapi.com/api/v2/Characters"; 
 
const got = document.querySelector(".got");


 async function gameOfthrones() {
    const response = await fetch(url);
    const gotCharacters = await response.json(); 

    console.log(gotCharacters); 
    
    got.innerHTML = `<h1>${gotCharacters.fullName}</h1>
                 <p>${gotCharacters.family}</p> 
                 <div class="details-title">${gotCharacters.title}</div>`;  
 }

 gameOfthrones();

 // <div class="character-image"
 //style="background-image: url(`${gotCharacters.image}`)";></div>