const passwordVerification = document.getElementById("user_password");
const confirmPasswordVerification = document.getElementById("confirm_user_password");

/*if (passwordVerification) {
    passwordVerification.addEventListener('input',function(addEventListener){
        const inputValue = event.target.value; // Get the current value of the input field
        console.log(inputValue); // Do something with the input value
    }); 
    console.log(passwordVerification);
    console.log(confirmPasswordVerification);
}*/




if (passwordVerification) {
    passwordVerification.addEventListener('input', ()=>{
 
        console.log(this.value);
      
      })
}