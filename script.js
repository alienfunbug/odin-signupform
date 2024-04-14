const submitButton = document.getElementById("createaccount");
const passwordVerification = document.getElementById("user_password");
const confirmPasswordVerification = document.getElementById("confirm_user_password");
const signupform = document.getElementById("signupform")
submitButton.addEventListener("click", (event) => {

    if (passwordVerification.value === confirmPasswordVerification.value) {
		alert("Successfully created account!");
        signupform.reset();
	} else {
		alert("Passwords do not match, please try again");
	}
});
