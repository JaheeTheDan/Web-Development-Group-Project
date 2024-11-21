// Get references to HTML elements
const cartItemsTable = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const clearCartButton = document.getElementById('clear-cart');
const checkoutButton = document.getElementById('checkout');
const closeCartButton = document.getElementById('close-cart');

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display and total
function updateCart() {
    cartItemsTable.innerHTML = ''; // Clear the current table content
    let subtotal = 0;
    let tax = 0;
    let discount = 0;

    // Loop through each item in the cart and display it
    cart.forEach((item, index) => {
        const row = cartItemsTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td>$${(item.discount || 0).toFixed(2)}</td>
            <td>$${(item.tax || 0).toFixed(2)}</td>
            <td>$${(item.price * item.quantity - item.discount + item.tax).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        subtotal += item.price * item.quantity;
        tax += item.tax || 0;
        discount += item.discount || 0;
    });

    // Calculate totals
    const total = subtotal - discount + tax;
    cartSubtotal.textContent = subtotal.toFixed(2);
    cartTax.textContent = tax.toFixed(2);
    cartDiscount.textContent = discount.toFixed(2);
    cartTotal.textContent = total.toFixed(2);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update quantity
function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) newQuantity = 1; // Quantity can't be less than 1
    cart[index].quantity = parseInt(newQuantity, 10);
    updateCart();
}

// Function to remove an item
function removeItem(index) {
    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Update the cart display
}

// Function to clear the cart
clearCartButton.addEventListener('click', () => {
    cart = []; // Clear the cart array
    updateCart(); // Update the cart display
});

// Function to handle checkout (redirect to checkout page)
checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        window.location.href = 'checkout.html'; // Redirect to checkout page
    } else {
        alert('Your cart is empty!');
    }
});

// Function to close the cart (just hides the cart view in this case)
closeCartButton.addEventListener('click', () => {
    document.querySelector('.cart-container').style.display = 'none'; // Hide the cart
});

// Initially populate the cart
updateCart();
