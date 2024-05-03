// Task 1.


let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

console.log(products)

// Task 2.

function displayProducts() {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h1 class="card-title">${product.name}</h1>
                    <h3 class="card-subtitle mb-2 text-body-secondary">Price: $${product.price.toFixed(2)}</h3></p>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>`;
        productContainer.insertAdjacentHTML('beforeend', productCard);
    });
}

// Task 3.

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    alert("Welcome to our Coding Temple Store");
});
