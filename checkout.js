// Get references to HTML elements
const checkoutSummaryTable = document.getElementById('checkout-summary').getElementsByTagName('tbody')[0];
const checkoutTotal = document.getElementById('checkout-total');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const amountPaidInput = document.getElementById('amount-paid');
const confirmButton = document.getElementById('confirm-checkout');
const cancelButton = document.getElementById('cancel-checkout');

// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem('login_user')).cart || [];

// Function to update the checkout summary and total
function updateCheckoutSummary() {
    checkoutSummaryTable.innerHTML = ''; // Clear the current table content
    let subtotal = 0;

    // Loop through each item in the cart and display it in the table
    cart.forEach(item => {
        const row = checkoutSummaryTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        subtotal += item.price * item.quantity;
    });

    // Calculate and display the total cost
    checkoutTotal.textContent = subtotal.toFixed(2);
}

// Function to handle the confirm checkout action
confirmButton.addEventListener('click', () => {
    let user = JSON.parse(localStorage.getItem("login_user"));
    let allInvoice = JSON.parse(localStorage.getItem("allInvoices")) || [];
    const name = nameInput.value;
    const address = addressInput.value;
    const amountPaid = parseFloat(amountPaidInput.value);
    const totalCost = parseFloat(checkoutTotal.textContent);

    if (!name || !address || !amountPaid) {
        alert('Please fill in all shipping details.');
        return;
    }

    if (amountPaid < totalCost) {
        alert('The amount paid cannot be less than the total cost.');
        return;
    }

    // Generate the invoice
    const invoice = {
        invoice_num : String(Math.floor(Math.random() * 9999)).padStart(4, '0'),
        name,
        trn: user.trn,
        address,
        items: cart,
        totalCost,
        amountPaid,
        change: amountPaid - totalCost,
        date: new Date().toLocaleString()
    };

    // Log the invoice to the console (you can print this or send to a server)
    console.log('Invoice Generated:', invoice);

    // Optionally, you can save the invoice in localStorage, or send it to the server
    allInvoice.push(invoice);
    localStorage.setItem("allInvoices", JSON.stringify(allInvoice));
    if (!user.invoices){
        user.invoices = [];
        user.invoices.push(invoice);
    }else{
        user.invoices.push(invoice);
    }
    
    localStorage.setItem("login_user", JSON.stringify(user));

    // Redirect to a confirmation page or show a success message
    alert('Checkout successful! Thank you for your purchase!');
    window.location.href = 'invoice.html'; // Redirect to a invoice page
});

// Function to handle the cancel checkout action
cancelButton.addEventListener('click', () => {
   // Redirect the user back to the cart page
   window.location.href = 'Services(James).html'; 
});
// Initialize the checkout page by updating the cart summary
updateCheckoutSummary();
