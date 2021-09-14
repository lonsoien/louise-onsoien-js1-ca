 
 const form = document.querySelector("#schoolform");
 
 const fullName = document.querySelector("#fullName"); 
 const fullnameError = document.querySelector("#fullNameError"); 

 const subject = document.querySelector("#subject"); 
 const subjecterror = document.querySelector("#subjectError"); 

 const email = document.querySelector("#email");
 const emailerror = document.querySelector("#emailError"); 

 const adress = document.querySelector("#adress"); 
 const adresserror = document.querySelector("#adressError");

 function validateForm() {
     event.preventDefault();

     if (checkLength(fullName.value, 0) === true) {
         fullNameError.style.display = "none"; 
     } else {
         fullNameError.style.display = "block"; 
     }

     if (checkLength(subject.value, 9) === true) {
         subjectError.style.display = "none"; 
    } else {
        subjectError.style.display = "block"; 
    }

    if (validateEmail(email.value) === true) {
        emailerror.style.display = "none"; 
    } else {
        emailerror.style.display = "block"; 
    }

    if (checkLength(adress.value, 24) === true) {
        adressError.style.display = "none"; 

   } else {
       adressError.style.display = "block"; 
   }

   console.log("post")
}

  form.addEventListener("submit", validateForm); 

  function checkLength(value, len) {
      if (value.trim().length > len) {
          return true; 
      } else {
          return false;

     }
}

 function validateEmail(email) {
     const regEx = /\S+@\S+\.\S+/; 
     const patternMatches = regEx.test(email); 
     return patternMatches; 
 }





   //  if (fullName.value.trim().length > 0) {
      //   fullnameError.style.display = "none"; 
    // }
  //   else {
     //    fullnameError.style.display = "block"; 
  //   }

   //  if (subject.value.trim().length > 9) {
       // subjectError.style.display = "none"; 
   // }
 //   else {
  //      subjectError.style.display = "block"; 
  //  }





 //form.onsubmit = function() {
   //  event.preventDefault();

  //   console.log(event);

  //   const name = document.querySelector("#name"); 

  //   console.log(name.value); 

  //   const subject = document.querySelector("#subject"); 

   //  console.log(subject.value); 

  //   const email = document.querySelector("#email"); 

 //    console.log(email.value); 

  //   const adress = document.querySelector("#adress"); 

   //  console.log(adress.value); 
 //}; 





