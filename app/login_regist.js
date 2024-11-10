// Jaheem Shaw 2205642

/**
 * This function is responsible for registering a new user by collecting user data from the signup form,
 * validating the input, adding the user to the list of registered users, and storing the updated list in local storage.
 * After successful registration, the user is redirected to the home page.
 *
 * @param {HTMLElement} formElement - The HTML form element containing the signup form data.
 * @returns {void}
 */
function registerNewUser(formElement) {
    // Get the signup form data
    const sign_up_form = new FormData(formElement);

    // Convert the FormData object to a plain JavaScript object for easier manipulation
    formDataObj ={};
    sign_up_form.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

    // Retrieve the list of registered users from local storage
    let list_of_users = JSON.parse(localStorage.getItem("list_of_register_users"));

    // Add the new user to the list with an empty cart
    list_of_users[username] = {"cart" : []};

    // Copy the form data to the user object in the list
    for ([key, value] of sign_up_form){
        list_of_users[username][key]=value;
    };

    // Display a success message to the user
    alert("Account made successfully.");

    // Store the updated list of registered users in local storage
    localStorage.setItem("list_of_register_users", JSON.stringify(list_of_users));

    // Set the login status and the currently logged-in user in local storage
    localStorage.setItem("is_a_user_login", true);
    localStorage.setItem("login_user", JSON.stringify(list_of_users[username]));

    // Redirect the user to the home page
    window.location.href = "index.html";
}

const login_btn = document.getElementById("login_btn");
const sign_up_btn = document.getElementById("sign_up_btn");


registerNewUser();

login_btn.addEventListener("click", function(event) {
    let try_login_count = 0;
    // Prevent the form from submitting
    event.preventDefault();

    const login_form = new FormData(document.getElementById("login"));
    const username = login_form.get("username");
    const password = login_form.get("password");

    let list_of_users = JSON.parse(localStorage.getItem("list_of_register_users"));

    // Validate the username and password
    if (!username ||!password) {
        alert("Please enter both username and password.");
        return;
    }


    // Check if the username and password match any of the registered users in the list
    if (!list_of_users[username]) {
        alert("Invalid username, doesn't match any of the registered users");
        return;
    }else if (list_of_users[username].password === password){
        try_login_count = 0;
        alert("You logged in successfully");
        localStorage.setItem("is_a_user_login", true);
        localStorage.setItem("login_user", JSON.stringify(list_of_users[username]));
        window.location.href = "index.html";
    }else{
        try_login_count++;
        alert("Invalid username or password.");
    }

    // If fail 3 times, send user to the error page.
    if (try_login_count >= 3) {
        window.location.href = "error.html";
        return;
    }

});


sign_up_btn.addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    const sign_up_form = new FormData(document.getElementById("signup"));
    
    const full_name = sign_up_form.get("full_name");
    const username = sign_up_form.get("username");
    const password = sign_up_form.get("password");

    
    let list_of_users = JSON.parse(localStorage.getItem("list_of_register_users"));
    
    // Validate the username and password
    if (!full_name || !username ||!password) {
        alert("Please enter all fields.");
        return;
    }

    // Check if the username already exists
    if (list_of_users[username]) {
        alert("Username already exists. Please choose a different one.");
        return;
    }
    
    // Add the user to the list
    list_of_users[username] = {"cart" : []};
    for ([key, value] of sign_up_form){
        list_of_users[username][key]=value;
    };

    
    alert("Account made successfully.");
    
    localStorage.setItem("list_of_register_users", JSON.stringify(list_of_users));
    localStorage.setItem("is_a_user_login", true);
    localStorage.setItem("login_user", JSON.stringify(list_of_users[username]));

    window.location.href = "index.html";
});