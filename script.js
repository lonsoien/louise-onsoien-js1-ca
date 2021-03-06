const url = homePage(); 

const detailCharacter = document.querySelector(".detailCharacter");
 
function homePage() {
    return "https://thronesapi.com/api/v2/Characters";
}

async function gameOfthrones() {
    const response = await fetch(url); 
    const results = await response.json(); 

    console.log(results); 

    //loop array of objects

    results.forEach(function(characters) {
        detailCharacter.innerHTML += `<a href="details.html?id=${characters.id}" class="character">
        <h2>${characters.fullName}</h2> 
        <img src="${characters.imageUrl}" alt="${characters.fullName}" />
         belongs to <h3>${characters.family}</h3>
         also known as <h4>${characters.title}</h4></a>`; 
    });
}

gameOfthrones(); 