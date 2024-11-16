// Jaheem Shaw 2205642

/**
 * This function is responsible for registering a new user by collecting user data from the signup form,
 * validating the input, adding the user to the list of registered users, and storing the updated list in local storage.
 * After successful registration, the user is redirected to the home page.
 * 
 * @author Jaheem Shaw 2205642
 * @param {HTMLElement} formElement - The HTML form element containing the signup form data.
 * @returns {void}
 */
function registerNewUser(formElement) {
    // Get the signup form data
    const signUpForm = new FormData(formElement);

    // Retrieve the list of registered users from local storage
    let registrationData = JSON.parse(localStorage.getItem("registrationData"));
    let user_trn = signUpForm.get("trn");


    let formDataObj ={};

    try {
        signUpForm.forEach((value, key) => {
            // Check if any field is empty and if so will throw an error
            if (!value){
                const error = new Error('Please fill all fields'); 
                throw error;
            } else if (key === 'trn' && registrationData[value]){
                // Check if the trn already exists    
                const error = new Error('TRN already exists.'); 
                throw error;
            
            } else if (key === 'password' && value.length < 8){
                // Check if the password is 8 char long
                const error = new Error('Password must be 8 characters long.'); 
                throw error;
                
            } else if (key === 'age' && value < 18){
                // Check if the age is greater than 18 
                const error = new Error('You must be at least 18 years old.'); 
                throw error;                
            }
                            
            // Convert the form data to a plain JavaScript object
            formDataObj[key] = value;
        });
    } catch (error) {
        alert(error.message);
        return;
    }
    
    
    
    // Add the new user to the list with an empty cart
    registrationData[user_trn] = {"cart" : []};

    // Copy the form data to the user object in the list
    for ([key, value] of signUpForm){
        registrationData[user_trn][key]=value;
    };

  
    
    // Store the updated list of registered users in local storage
    localStorage.setItem("registrationData", JSON.stringify(registrationData));

    // Set the login status and the currently logged-in user in local storage
    localStorage.setItem("isUserLogin", true);
    localStorage.setItem("loginUser", JSON.stringify(registrationData[user_trn]));
    // Display a success message to the user
    alert("Account made successfully.");


    // Redirect the user to the home page
    window.location.href = "index.html";
}



/**
 * This function handles the login process for a user. It retrieves the TRN and password from the login form,
 * validates the input, and checks if the TRN and password match any of the registered users in local storage.
 * If successful, the user is redirected to the home page. If the login fails 3 times, the user is redirected to an error page.
 * 
 * @author Victoria Pryce 
 *
 * @param {HTMLElement} formElement - The HTML form element containing the login form data.
 * @returns {void}
 */
function loginUser(formElement){
    let try_login_count = 0;

    const login_form = new FormData(formElement);
    const trn = login_form.get("trn");
    const password = login_form.get("password");


    let registrationData = JSON.parse(localStorage.getItem("registrationData"));

    // Validate the trn and password
    if (!trn ||!password) {
        alert("Please enter both TRN and password.");
        return;
    }

    // Check if the trn and password match any of the registered users in the list
    if (!registrationData[trn]) {
        alert("Invalid trn, doesn't match any of the registered users");
        return;
    }else if (registrationData[trn].password === password){
        try_login_count = 0;
        alert("You logged in successfully");
        localStorage.setItem("is_a_user_login", true);
        localStorage.setItem("login_user", JSON.stringify(registrationData[trn]));
        window.location.href = "index.html";
    }else{
        try_login_count++;
        alert("Invalid trn or password.");
    }

    // If fail 3 times, send user to the error page.
    if (try_login_count >= 3) {
        window.location.href = "error.html";
        return;
    }
}
