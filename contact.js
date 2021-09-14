 
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

     if (lengthControl(fullName.value, 0) === true) {
         fullNameError.style.display = "none"; 
     } else {
         fullNameError.style.display = "block"; 
     }

     if (lengthControl(subject.value, 9) === true) {
         subjectError.style.display = "none"; 
    } else {
        subjectError.style.display = "block"; 
    }

    if (validateEmail(email.value) === true) {
        emailerror.style.display = "none"; 
    } else {
        emailerror.style.display = "block"; 
    }

    if (lengthControl(adress.value, 24) === true) {
        adressError.style.display = "none"; 

   } else {
       adressError.style.display = "block"; 
   }

   console.log("post")
}

  form.addEventListener("submit", validateForm); 

  function lengthControl(value, len) {
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






