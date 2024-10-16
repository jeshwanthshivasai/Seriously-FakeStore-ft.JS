// Fetch products from the Fake Store API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

//add to cart
let val = document.getElementById('num')
val.innerHTML = '0';
function plus() {
    val.innerHTML++;
}
function minus() {
    val.innerHTML--;
}
function reset() {
    val.innerHTML = '0';
}

// Display products on the page

function displayProducts(products) {
    const container = document.getElementById('products-container'); 
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-category">Category: ${product.category}</p>
            <p class="product-description">${product.description.substring(0, 50)}...</p>
            <p class="product-rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        `;
        container.appendChild(productCard);
    });
}

fetchProducts();