const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const checkboxes = document.querySelectorAll(".filter-check");

// Initial product render
function renderProducts(productList) {
    productContainer.innerHTML = "";

    productList.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "products-box";
        productDiv.innerHTML = `
            <img src="${product.image}" width="220px" height="300px" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.price}/-</p>
            <button class="add-cart-btn" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                Add to Cart
            </button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Filter and Search combined logic
function filterProducts() {
    const searchTerm = searchInput.value.toUpperCase();
    const activeFilters = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toUpperCase().includes(searchTerm);
        const matchesFilters = activeFilters.length === 0 ||
            activeFilters.includes(product.category) ||
            activeFilters.includes(product.type);

        return matchesSearch && matchesFilters;
    });

    renderProducts(filtered);
}

// Event Listeners
searchInput.addEventListener("keyup", filterProducts);

checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

// Initial Render
renderProducts(products);