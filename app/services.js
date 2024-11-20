// Jaheem Shaw 2205642
const SERVICES_PRICE = {
  fronted: 100,
  backend: 200,
  fullstack: 300,
  responsive: 100,
  "one-on-one_ment": 100,
  group_ment: 150,
  code_review_1: 100,
  code_review_2: 250,
};

const SERVICES = {
  fronted: {
    fullname: "Fronted Development Course",
    price: SERVICES_PRICE["fronted"],
    description:
      "Learn how to build responsive websites using HTML, CSS, and JavaScript.",
    category: "Courses",
    images: [],
  },
  backend: {
    fullname: "Backend Development Course",
    price: SERVICES_PRICE["backend"],
    description: "Learn how to build web applications using Python and Django.",
    category: "Courses",
    images: [],
  },
  fullstack: {
    fullname: "Fullstack Development Course",
    price: SERVICES_PRICE["fullstack"],
    description:
      "Learn how to build web applications using Python, Django, and JavaScript.",
    category: "Courses",
    images: [],
  },
  responsive: {
    fullname: "Responsive Web Design Course",
    price: SERVICES_PRICE["responsive"],
    description:
      "Learn how to create visually appealing and user-friendly websites.",
    category: "Courses",
    images: [],
  },
  "one-on-one_ment": {
    fullname: "One-on-One Mentorship",
    price: SERVICES_PRICE["one-on-one_ment"],
    description:
      "Learn how to provide personalized guidance and support to students.",
    category: "Mentorship",
    images: [],
  },
  group_ment: {
    fullname: "Group Mentorship",
    price: SERVICES_PRICE["group_ment"],
    description:
      "Learn how to provide personalized guidance and support to groups of students.",
    category: "Mentorship",
    images: [],
  },
  code_review_1: {
    fullname: "Code Review 1",
    price: SERVICES_PRICE["code_review_1"],

    description:
      "Learn how to provide constructive feedback and help students improve their coding skills.",
    category: "Code Review",
    images: [],
  },
  code_review_2: {
    fullname: "Code Review 2",
    price: SERVICES_PRICE["code_review_2"],
    description:
      "Learn how to provide constructive feedback and help students improve their coding skills.",
    category: "Code Review",
    images: [],
  },
};

function add_to_cart(service_name, service_price, service_fullname) {
  const item = {
    name: service_name,
    fullname: service_fullname,
    price: service_price,
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

function generateServcies() {
  const products_div = document.getElementById("products");

//   const courses_sect = document.querySelector("section#courses_sect");
  const courses_sect = document.getElementById("courses_sect");
  const mentorship_sect = document.querySelector("section#mentorship_sect");
  const code_review_sect = document.querySelector("section#code_review_sect");

  let sections = {
    courses: courses_sect,
    mentorship: mentorship_sect,
    code_review: code_review_sect,
  };

  for (const [serviceName, serviceInfo] of Object.entries(SERVICES)) {
    const categoryName = serviceInfo.category.toLowerCase().replace(" ", "_");
    console.log(categoryName);

    if (!sections[categoryName]) {
      console.log(`${categoryName} not found`);
    }

    let div = document.createElement("div");
    div.innerHTML = `
    <div>
      <img src="${serviceInfo.images[0]}" alt="${categoryName}_img_1">
      <h4>${serviceInfo.fullname}</h4>
      <p>${serviceInfo.description}</p>
    </div>
    <button id="${serviceName}_btn" onclick="openPopup(event)">Show more</button>
    `;
    console.log(sections[categoryName]);
    // sections[categoryName].getElementById(categoryName).appendChild(div);

  }

}

// Add the different services to localStorage
localStorage.setItem("allServices", JSON.stringify(SERVICES));

const add_to_cart_btns = document.querySelectorAll("button.add_to_cart_btn");
const items_price = document.querySelectorAll(".item_price");

generateServcies();

items_price.forEach((item) => {
  const service_name =
    item.parentElement.parentElement.parentElement.parentElement.id;
  item.textContent = `Price $${SERVICES_PRICE[service_name]} USD`;
});

if (!cheak_if_a_user_login()) {
  add_to_cart_btns.forEach((btn) => {
    btn.innerHTML = "Sign Up";
  });
} else {
  var user_cart = JSON.parse(localStorage.getItem("login_user")).cart || [];

  user_cart.forEach((item) => {
    const btn = document.querySelector(`button[data-service="${item.name}"]`);
    btn.innerHTML = "Remove from Cart";
  });

  add_to_cart_btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const service = SERVICES[event.target.dataset.service];
      const service_name = event.target.dataset.service;
      const service_fullname = service.fullname;
      const service_price = service.price;

      for (const item of user_cart) {
        if (item.name === service_name) {
          alert("Item is removed from cart");
          remove_from_cart(service_name);
          btn.innerHTML = "Add to Cart";
          return;
        }
      }
      add_to_cart(service_name, service_price, service_fullname);
      btn.innerHTML = "Remove from Cart";

      update_users_list();
    });
  });
}
