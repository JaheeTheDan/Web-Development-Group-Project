function clear_cart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    const login_user = JSON.parse(localStorage.getItem("login_user"));
    login_user.cart = [];
    localStorage.setItem("login_user", JSON.stringify(login_user));

    update_users_list();
    window.location.reload();
  }
}

function calculateTotalAfterTax() {
  const cart = JSON.parse(localStorage.getItem("login_user")).cart || [];

  let subTolal = 0;
  const taxRate = 0.1;
  let tax = 0;
  let totalAfterTax = 0;

  for (const item of cart) {
    subTolal += item.price;
  }

  tax = taxRate * subTolal;
  totalAfterTax = subTolal + tax;

  document.getElementById("sub-total").textContent = `$${subTolal.toFixed(
    2
  )} USD`;
  document.getElementById("tax").textContent = `$${tax.toFixed(2)} USD`;
  document.getElementById("total").textContent = `$${totalAfterTax.toFixed(
    2
  )} USD`;
}

let allInvoices = JSON.parse(localStorage.getItem("allInvoices"));
let invoice = allInvoices[allInvoices.length - 1];

document.getElementById("invoice_num").innerText = invoice.invoice_num;

const today = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
document.getElementById("today_date").innerHTML = invoice.date;

document
  .getElementById("to")
  .append((document.createElement("p").innerText = invoice.name));

const cart = invoice.cart;
const invoice_table = document
  .getElementById("invoice")
  .getElementsByTagName("tbody")[0];

for (const item of cart) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${item.fullname}</td>
        <td>\$${item.price} USD</td>
    `;
}
calculateTotalAfterTax();

