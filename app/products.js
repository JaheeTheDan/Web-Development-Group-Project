/**
 * This function generates an array of Product objects.
 *
 * @function generate_products
 * @returns {Product[]} An array of Product objects.
 */
function generate_products() {
    /**
     * Represents a product with properties such as name, price, description, category, and images.
     *
     * @class Product
     * @param {string} name - The name of the product.
     * @param {number} price - The price of the product.
     * @param {string} description - The description of the product.
     * @param {string} category - The category of the product.
     * @param {string[]} images - An array of image URLs for the product.
     */
    class Product {
        constructor(name = "",
            price = 0,
            description = "",
            category = "",
            images = []) {
            this.name = name;
            this.price = price;
            this.description = description;
            this.category = category;
            this.image = images;
        }
    }

    const products = []
    for (let index = 0; index < 5; index++) {
        products.push(new Product("q", 1, "awdwa", "adw"));
    }

    return products;
}

const products_list = generate_products();

// Display the products in a table

const product_div = document.getElementById("products");

for (const product of products_list) {
    const row = document.createElement("div");
    row.innerHTML = `
        <span>${product.name}</span>
        <span>\$${product.price} USD</span>
        <span>${product.description}</span>
        <span>${product.category}</span>
    `;
    product_div.appendChild(row);
}


