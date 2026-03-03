// Cart Management Logic
let cart = JSON.parse(localStorage.getItem('nostra-cart')) || [];

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function addToCart(productId, name, price, image) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    saveCart();
    updateCartBadge();
    showNotification(`${name} added to cart!`);
}

function saveCart() {
    localStorage.setItem('nostra-cart', JSON.stringify(cart));
}

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'cart-notification';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize badge on load
document.addEventListener('DOMContentLoaded', updateCartBadge);
