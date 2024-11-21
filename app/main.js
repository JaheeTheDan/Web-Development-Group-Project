// Jaheem Shaw 2205642
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
        full_name: "Administrator",
        password: DEFAULT_PASSWORD,
        age: 21,
        gender: "Male",
        trn: "000-000-000",
        cart: [],
      };
      localStorage.setItem(key, JSON.stringify({ [DEFAULT_USERNAME]: user }));
    } else if (key === "is_a_user_login" && !localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(false));
    } else if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(null));
    } else {
      console.log(key + " exists");
    }
  }
}

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

// TODO: Add a check_if_admin_login function

function update_users_list() {
  const user_data = JSON.parse(localStorage.getItem("login_user"));
  const full_list = JSON.parse(localStorage.getItem("registrationData"));

  full_list[user_data.trn] = user_data;

  localStorage.setItem("registrationData", JSON.stringify(full_list));
}

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

function populate_cart() {
  const login_user = JSON.parse(localStorage.getItem("login_user"));
  const cart = login_user.cart;

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
  }
  calculateTotalAfterTax();
}
function calculateTotalAfterTax() {
  const taxRate = 0.1;
  const totalAfterTax = totalAmount + totalAmount * taxRate;
  document.getElementById("total-after-tax").textContent =
    totalAfterTax.toFixed(2);
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

    <div id="cart_btns">
      <button
        id="clear-all_btn"
        onclick="clear_cart()"
      >
        Clear All
      </button>
      <button
        id="checkout_btn"
        onclick="window.location.href ='invoice.html'"
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
