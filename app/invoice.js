function clear_cart(){
    if (confirm("Are you sure you want to clear your cart?")) {
        const login_user = JSON.parse(localStorage.getItem("login_user"));
        login_user.cart = [];
        localStorage.setItem("login_user", JSON.stringify(login_user));
    
        update_users_list();     
        window.location.reload();
    }   
}

document.getElementById("invoice_num").innerText = String(Math.floor(Math.random() * 9999)).padStart(4, '0') ;

const today = new Date().toLocaleString('default', { month: 'long' , day: 'numeric', year: 'numeric' });
document.getElementById("today_date").innerHTML = today;

var full_name = JSON.parse(localStorage.getItem("login_user")).full_name; 
document.getElementById("to").append(document.createElement("p").innerText = full_name);


const login_user = JSON.parse(localStorage.getItem("login_user"));
const cart = login_user.cart;
const invoice_table = document.getElementById("invoice").getElementsByTagName("tbody")[0];
let total = 0;


for (const item of cart) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.fullname}</td>
        <td>\$${item.price} USD</td>
    `;
    total += item.price;
    invoice_table.appendChild(row);
}

document.getElementById("total_price").textContent = `\$${total} USD`;