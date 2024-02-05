function validateForm() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let usernameError = document.querySelector("#username + .error-message");
    let emailError = document.querySelector("#email + .error-message");
    let passwordError = document.querySelector("#password + .error-message");
    let confirmPasswordError = document.querySelector("#confirm-password + .error-message");
  
    let isValid = true;
  
  
    if (!username.value) {
      usernameError.textContent = "Username is required";
      usernameError.style.display = "block";
      isValid = false;
    } 
  
   
    if (!email.value) {
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.textContent = "Invalid email format";
      emailError.style.display = "block";
      isValid = false;
    }
  
    
    if (!password.value) {
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long";
      passwordError.style.display = "block";
      isValid = false;
    }
  
    
    if (!confirmPassword.value) {
      confirmPasswordError.textContent = "Please confirm your password";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      confirmPasswordError.style.display = "block";
      isValid = false;
    }
  
    return isValid;
  }
  