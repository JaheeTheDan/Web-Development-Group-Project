// Jaheem Shaw 2205642
//Commenting done by Victoria Pryce - 2307070

// Initialize local storage with default data if not already present
const DEFAULT_TRN = "123-456-789";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin_123";


function init_local_storage() {
  const list_of_init_items_key = [
    "is_a_user_login",
    "login_user",
    "registrationData",
  ];

  for (const key of list_of_init_items_key) {
    if (!localStorage.getItem(key) && key === "registrationData") {
      // Create a new user with default credentials
      const user = {
        username: DEFAULT_USERNAME,
        trn: DEFAULT_TRN,
        full_name: "Administrator",
        password: DEFAULT_PASSWORD,
        age: 21,
        gender: "Male",
        cart: [],
      };
      localStorage.setItem(key, JSON.stringify({ [DEFAULT_TRN]: user }));
    } else if (key === "is_a_user_login" && !localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(false));
    } else if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(null));
    } else {
      console.log(key + " exists");
    }
  }
}

//checks local storage if a user is logged
function cheak_if_a_user_login() {
  const is_a_user_login = JSON.parse(localStorage.getItem("is_a_user_login"));
  const hidden_links = document.querySelectorAll("a.hidden");
  const login_link = document.querySelector('a[href="login.html"]');

  if (is_a_user_login) {
    hidden_links.forEach((link) => {
      link.classList.remove("hidden");
    });                                                                            
    login_link.classList.add("hidden");
  } else {
    hidden_links.forEach((link) => {
      link.classList.add("hidden");
    });
    login_link.classList.remove("hidden");
  }
  return JSON.parse(is_a_user_login);
}

//updates registration list in local storage

function update_users_list() {
  const user_data = JSON.parse(localStorage.getItem("login_user"));
  const full_list = JSON.parse(localStorage.getItem("registrationData"));

  full_list[user_data.trn] = user_data;

  localStorage.setItem("registrationData", JSON.stringify(full_list));
}

//checls if the logged-in user is an admin 
function logout_user(event) {
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

//adds service items to user cart and stores in local storage
function add_to_cart(service_name) {
  let user_cart = JSON.parse(localStorage.getItem("login_user")).cart || [];

  const item = {
    name: service_name,
    fullname: SERVICES[service_name].fullname,
    price: SERVICES[service_name].price,
  };
  user_cart.push(item);

  localStorage.setItem(
    "login_user",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("login_user")),
      cart: user_cart,
    })
  );
}

//removes an item from cart
function remove_from_cart(service_name) {
  let user_cart = JSON.parse(localStorage.getItem("login_user")).cart || [];

  user_cart.forEach((item, index) => {
    if (item.name === service_name) {
      user_cart.splice(index, 1);
    }
  });

  localStorage.setItem(
    "login_user",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("login_user")),
      cart: user_cart,
    })
  );
}


//clears cart data
function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    localStorage.setItem(
      "login_user",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("login_user")),
        cart: [],
      })
    );
    alert("Cart cleared successfully.");
  }
}

//populates the cart table with items from user cart & calc total amount of items in the cart
function populate_cart() {
  // TODO: Remove the commented comment below
  const cart = JSON.parse(localStorage.getItem("login_user")).cart || [];
  let totalAmount = 0;

  const cart_items = document.getElementById("cart_items");
  cart_items.children.item("tbody").innerHTML =
    "<tr><th>Item</th><th>Price</th></tr>";

  for (const item of cart) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.fullname}</td>
            <td>\$${item.price} USD</td>
            <td>
                <button class="remove_from_cart_btn" onclick="remove_from_cart('${item.name}'); populate_cart()">Remove</button>
            </td>
        `;
    cart_items.children.item("tbody").append(row);

    totalAmount += item.price;

  }
  
  calculateTotalAfterTax(totalAmount);
}

// redundanct function but I dont want to delet it yet
// Who said it is redunanct, It very much neede.
function calculateTotalAfterTax() {
  const cart = JSON.parse(localStorage.getItem("login_user")).cart || [];

  let subTolal = 0;
  const taxRate = 0.1;
  let tax =0 ;
  let totalAfterTax = 0;

  for (const item of cart) {subTolal += item.price;}

  tax = taxRate * subTolal;
  totalAfterTax = subTolal + tax;


  document.getElementById("sub-total").textContent = `$${subTolal.toFixed(2)} USD`;
  document.getElementById("tax").textContent = `$${tax.toFixed(2)} USD`;
  document.getElementById("total").textContent = `$${totalAfterTax.toFixed(2)} USD`;
}

function show_cart(event) {
  event.preventDefault();
  const cart = document.getElementById("cart");
  const cartContent = document.createElement("div");

  cartContent.innerHTML = `
    <svg
      class="close_btn"
      onclick="close_cart()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
    <h2>Cart</h2>

    <table id="cart_items">
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
    </table>

    <table id="totalTable">
      <tr>
        <td>Sub Total</td>
        <td id="sub-total">$0.00 USD</td>
      </tr>
      <tr>
        <td>Tax</td>
        <td id="tax">$0.00 USD</td>
      </tr>
      <tr>
        <td>Grand Total</td>
        <td id="total">$0.00 USD</td>
      </tr>
    </table>

    <div id="cart_btns">
      <button
        id="clear-all_btn"
        onclick="clear_cart();populate_cart()"
      >
        Clear All
      </button>
      <button
        id="checkout_btn"
        onclick="window.location.href ='Check_out.html'"
      >
        Checkout
      </button>
      
    </div>
  `;

  cart.appendChild(cartContent);
  populate_cart();
  cart.classList.add("show");
}
function close_cart() {
  const cart = document.getElementById("cart");
  cart.classList.remove("show");
  cart.innerHTML = "";
  console.log(document.getElementById("cart"));
}

init_local_storage();

cheak_if_a_user_login();
