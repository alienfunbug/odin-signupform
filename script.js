const submitButton = document.getElementById("createaccount");
const passwordVerification = document.getElementById("user_password");
const confirmPasswordVerification = document.getElementById("confirm_user_password");
const passwordAlert = document.getElementById("passwordAlert");
const signupform = document.getElementById("signupform")


passwordVerification.addEventListener("input",(event)=>{
	if (passwordVerification.value != confirmPasswordVerification.value){
		passwordAlert.style.opacity=1;
	}else{
		passwordAlert.style.opacity=0;
	}

}); 

confirmPasswordVerification.addEventListener("input",(event)=>{
	if (passwordVerification.value != confirmPasswordVerification.value){
		passwordAlert.style.opacity=1;
	}else{
		passwordAlert.style.opacity=0;
	}

});

submitButton.addEventListener("click", (event) => {
    if ((passwordVerification.value === confirmPasswordVerification.value) && ((passwordVerification.value).length > 8)) {
		alert("Successfully created account!");
        signupform.reset();
	} else {
		alert("Passwords do not match, or meet complexity requirements, please try again");
	}
});
