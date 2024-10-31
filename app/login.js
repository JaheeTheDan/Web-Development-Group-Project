// Jaheem Shaw 2205642
const login_btn = document.getElementById("login_btn");
const sign_up_btn = document.getElementById("sign_up_btn");

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