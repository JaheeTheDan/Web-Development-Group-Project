// Jaheem Shaw 2205642
//Comments vy VIctoria Pryce
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
    short_description: `Dive deep into HTML, CSS, and JavaScript to create stunning,
              responsive websites. Learn popular frameworks like React or Vue.js
              and gain hands-on experience building interactive, user-friendly
              web applications.`,
    long_description: `Our Frontend Development courses teach the fundamentals of HTML,
              CSS, and JavaScript, equipping students with the knowledge to
              create visually appealing and interactive websites. As learners
              progress, they can dive into advanced frameworks such as React and
              Vue.js, where they'll build dynamic user interfaces and enhance
              their development efficiency.`,
    category: "Courses",
    images: [
      "images/services_images/fronted_img_1.jpg",
      "images/services_images/fronted_img_2.jpg",
    ],
  },
  backend: {
    fullname: "Backend Development Course",
    price: SERVICES_PRICE["backend"],
    short_description: `Master server-side programming with Node.js, Express, and database
              management. Learn how to build secure, scalable web applications
              and APIs that power modern websites.`,
    long_description: `In our Backend Development courses, students will master
              server-side technologies including Node.js, Express, and database
              management with MongoDB or SQL. This training empowers learners to
              build robust and scalable web applications, focusing on APIs and
              data handling.`,
    category: "Courses",
    images: [
      "images/services_images/backend_img_1.jpg",
      "images/services_images/backend_img_3.jpg",
    ],
  },
  fullstack: {
    fullname: "Fullstack Development Course",
    price: SERVICES_PRICE["fullstack"],
    short_description: `Become a versatile developer with comprehensive training in both
              frontend and backend technologies. Learn to build and deploy
              complete web applications from scratch.`,
    long_description: `For those seeking a well-rounded skill set, our Full-Stack
              Development program combines both frontend and backend training,
              preparing students to tackle projects from start to finish.
              Throughout the courses, learners engage in hands-on projects that
              simulate real-world scenarios, allowing them to apply their
              knowledge and build a strong portfolio.`,
    category: "Courses",
    images: [
      "images/services_images/full_img_1.jpg",
      "images/services_images/full_img_2.jpg",
    ],
  },
  responsive: {
    fullname: "Responsive Web Design Course",
    price: SERVICES_PRICE["responsive"],
    short_description: `The Responsive Web Design Course at WebDev Mastery teaches you to
              create websites that adapt to any device. Learn flexible grids,
              media queries, and use tools like Bootstrap to build responsive,
              user-friendly designs.`,
    long_description: `The Responsive Web Design Course at WebDev Mastery teaches you how
              to create websites that look great and work smoothly on any
              device, from desktops to smartphones. You'll master key techniques
              like flexible grids, fluid images, and media queries, enabling you
              to build adaptable layouts for various screen sizes. Through
              hands-on projects, you'll learn how to optimize websites for
              performance and accessibility, while also exploring tools like
              Bootstrap and CSS Grid to streamline your design process. By the
              end of the course, you'll be equipped to build modern,
              user-friendly websites that deliver seamless experiences across
              all devices.`,
    category: "Courses",
    images: [
      "images/services_images/responsive_img_1.jpg",
      "images/services_images/responsive_img_2.jpg",
    ],
  },
  "one-on-one_ment": {
    fullname: "One-on-One Mentorship",
    price: SERVICES_PRICE["one-on-one_ment"],
    short_description: `One-on-One Mentorship pairs you with an industry professional
                for personalized guidance, tailored feedback on projects, and
                career advice, ensuring focused support for your goals.`,
    long_description: `One-on-One Mentorship provides personalized guidance from
              experienced industry professionals. In this format, each mentee is
              paired with a mentor who tailors the learning experience to meet
              individual goals and needs. This personalized attention allows for
              in-depth discussions on specific challenges, detailed feedback on
              projects, and tailored career advice. Whether you're seeking to
              improve your coding skills, build a portfolio, or prepare for
              interviews, this format ensures that you receive focused support
              to help you achieve your objectives.`,
    category: "Mentorship",
    images: [
      "images/services_images/one-on-one_ment_img_1.jpg",
      "images/services_images/one-on-one_ment_img_2.jpg",
    ],
  },
  group_ment: {
    fullname: "Group Mentorship",
    price: SERVICES_PRICE["group_ment"],
    short_description: `Group Mentorship fosters collaboration among peers. In small
                groups, you can share experiences, tackle coding challenges
                together, and gain diverse insights, all while building a
                supportive community.`,
    long_description: `Group Mentorship fosters collaboration and community learning. In
              small groups, mentees can share their experiences, ask questions,
              and work together on coding challenges. This format not only
              enhances learning through peer interaction but also encourages
              networking among participants. Group sessions provide a supportive
              environment where learners can discuss ideas, receive diverse
              perspectives, and collaborate on projects, making it a rich
              learning experience.`,
    category: "Mentorship",
    images: [
      "images/services_images/group_ment_img_1.jpg",
      "images/services_images/group_ment_img_2.jpg",
    ],
  },
  code_review_1: {
    fullname: "Peer Code Reviews",
    price: SERVICES_PRICE["code_review_1"],
    short_description: `Collaborate with fellow learners for feedback on your code,
                fostering discussion and enhancing your understanding of coding
                practices.`,
    long_description: `This service connects you with fellow learners who provide
              feedback on your code. It fosters collaboration and encourages
              discussion around coding practices. By reviewing each other's
              work, you not only gain diverse perspectives but also enhance your
              understanding of coding concepts. Peer reviews are an excellent
              way to develop communication skills and build a supportive
              learning community.`,
    category: "Code Review",
    images: [
      "images/services_images/peer_code_review_img_1.jpg",
      "images/services_images/peer_code_review_img_2.png",
    ],
  },
  code_review_2: {
    fullname: "Professional Code Reviews",
    price: SERVICES_PRICE["code_review_2"],
    short_description: `Conducted by experienced developers, this service provides
                detailed evaluations and actionable recommendations, focusing on
                best practices and optimization for personal projects or job
                preparation.`,
    long_description: `For those seeking expert guidance, our professional code review
              service is led by experienced developers. They conduct in-depth
              evaluations of your code, focusing on best practices,
              optimization, and industry standards. This service provides
              detailed feedback that identifies potential issues and offers
              actionable recommendations to improve your code quality. Whether
              you're working on a personal project or preparing for a job,
              professional reviews give you the insights needed to elevate your
              skills.`,
    category: "Code Review",
    images: [
      "images/services_images/pro_code_review_img_1.jpg",
      "images/services_images/pro_code_review_img_2.jpg",
    ],
  },
};

// Add the different services to localStorage
localStorage.setItem("allServices", JSON.stringify(SERVICES));


function generateServcies() {
  const allServices = JSON.parse(localStorage.getItem("allServices"));
  const courses_sect = document.getElementById("courses_sect");
  const mentorship_sect = document.getElementById("mentorship_sect");
  const code_review_sect = document.getElementById("code_review_sect");
  const hidden_content = document.getElementById("hidden_content");

  let sections = {
    courses: courses_sect,
    mentorship: mentorship_sect,
    code_review: code_review_sect,
  };

  for (const [serviceName, serviceInfo] of Object.entries(allServices)) {
    const categoryName = serviceInfo.category.toLowerCase().replace(" ", "_");

    if (!sections[categoryName]) {
      console.log(`${categoryName} not found`);
    }

    let div = document.createElement("div");
    div.innerHTML = `
      <div>
        <img src="${serviceInfo.images[0]}" alt="${categoryName}_img_1">
        <h4>${serviceInfo.fullname}</h4>
        <p>${serviceInfo.short_description}</p>
      </div>
      <button id="${serviceName}_btn" onclick="openPopup(event)">Show more</button>
      `;
    sections[categoryName].querySelector(`#${categoryName}`).appendChild(div);

    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.id = serviceName;
    popup.innerHTML = `
      <div class="content">
          <svg
            class="close_btn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
          <div class="carousel">
            <img
              src="${serviceInfo.images[0]}"
              alt="${serviceName}_img_1"
              class="active"
            />
            <img
              src="${serviceInfo.images[1]}"
              alt="${serviceName}_img_2"
            />
          </div>
          <div>
            <h3>${serviceInfo.fullname}</h3>
            <p>
            ${serviceInfo.long_description}
            <span class="item_price" ></span>
            </p>

            <button
              id="${serviceName}_cart_btn"
              data-service="${serviceName}"
              class="add_to_cart_btn"
            >
              Add to cart
            </button>
          </div>
        </div>  

        `;

        hidden_content.appendChild(popup);
  }
}

generateServcies();

const add_to_cart_btns = document.querySelectorAll("button.add_to_cart_btn");
const items_price = document.querySelectorAll(".item_price");

items_price.forEach((item) => {
  const service_name =
    item.parentElement.parentElement.parentElement.parentElement.id;
  item.textContent = `Price $${SERVICES_PRICE[service_name]} USD`;
});

if (!cheak_if_a_user_login()) {
  add_to_cart_btns.forEach((btn) => {
    btn.innerHTML = "Sign Up";
    btn.addEventListener("click", ()=>{
      window.location.href = "login.html";
    });
  });
} else {
  let user_cart = JSON.parse(localStorage.getItem("login_user")).cart || [];

  user_cart.forEach((item) => {
    const btn = document.querySelector(`button[data-service="${item.name}"]`);
    btn.innerHTML = "Remove from Cart";
  });

  add_to_cart_btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const service_name = event.target.dataset.service;

      for (const item of user_cart) {
        if (item.name === service_name) {
          alert("Item is removed from cart");
          remove_from_cart(service_name);
          btn.innerHTML = "Add to Cart";
          return;
        }
      }
      add_to_cart(service_name);
      btn.innerHTML = "Remove from Cart";

      update_users_list();
    });
  });
}
