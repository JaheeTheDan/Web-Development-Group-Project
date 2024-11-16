// Jaheem Shaw 2205642
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin_123";


function init_local_storage(){
    const list_of_init_items_key = [
        "is_a_user_login",
        "login_user",
        "registrationData"
    ];

    for (const key of list_of_init_items_key) {

        if (!localStorage.getItem(key) && key === "registrationData") {
            // Create a new user with default credentials
            const user = {
                username: DEFAULT_USERNAME,
                full_name: "Administrator",
                password: DEFAULT_PASSWORD,
                age:21,
                gender: "Male",
                trn:"000-000-000",
                cart: []
            };
            localStorage.setItem(key, JSON.stringify({[DEFAULT_USERNAME]: user }));
        
        } else if (key === "is_a_user_login" && !localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(false));

        } else if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(null));

        }else{
            console.log(key + " exists");
        }
    }
}

function cheak_if_a_user_login() {
    const is_a_user_login =  JSON.parse(localStorage.getItem("is_a_user_login"));
    const hidden_links = document.querySelectorAll("a.hidden");
    const login_link =  document.querySelector("a[href=\"login.html\"]");


    if (is_a_user_login) {
        hidden_links.forEach(link => {
            link.classList.remove("hidden");
        });
        login_link.classList.add("hidden");

    } else{
        hidden_links.forEach(link => {
            link.classList.add("hidden");
        });
        login_link.classList.remove("hidden");

    }
    return JSON.parse(is_a_user_login);

}

// TODO: Add a check_if_admin_login function

function update_users_list(){
    const user_data = JSON.parse(localStorage.getItem("login_user"));
    const full_list = JSON.parse(localStorage.getItem("registrationData"));
    
    full_list[user_data.trn] = user_data;


    localStorage.setItem("registrationData", JSON.stringify(full_list));
}

function logout_user(event){       
    event.preventDefault();
    if (confirm("Are you sure you want to logout?")) {
        alert("You have been logged out.");

        localStorage.setItem("is_a_user_login", false);
        localStorage.setItem("login_user", null);
        window.location.href = "index.html";
    } else {
        alert("Logout canceled.");
    }
}

function populate_cart(){
    const login_user = JSON.parse(localStorage.getItem("login_user"));
    const cart = login_user.cart;


    const cart_items = document.getElementById("cart_items");
    cart_items.children.item("tbody").innerHTML = "<tr><th>Item</th><th>Price</th></tr>";
    
    for (const item of cart) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.fullname}</td>
            <td>\$${item.price} USD</td>
        `;
        cart_items.children.item("tbody").append(row);
    }
    calculateTotalAfterTax();


}
function calculateTotalAfterTax() {
    const taxRate = 0.10;
    const totalAfterTax = totalAmount + (totalAmount * taxRate);
    document.getElementById('total-after-tax').textContent = totalAfterTax.toFixed(2);
}

function show_cart(event){
    event.preventDefault();
    populate_cart();
    document.getElementById("cart").classList.add("show");
}
function close_cart(){
    document.getElementById("cart").classList.remove("show");
    console.log(document.getElementById("cart"));
}

init_local_storage();

cheak_if_a_user_login();
