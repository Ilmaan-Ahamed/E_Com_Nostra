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

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCartPage();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCartBadge();
    renderCartPage();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartBadge();
    renderCartPage();
}

function saveCart() {
    localStorage.setItem('nostra-cart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
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

// ═══════════════════════════════════════════
// Dynamic Cart Rendering (for buy.html)
// ═══════════════════════════════════════════

function renderCartPage() {
    const cartContainer = document.getElementById('cart-items-container');
    const summaryContainer = document.getElementById('order-summary-dynamic');

    if (!cartContainer) return; // Not on buy.html

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty</p>
                <a href="collection.html">Continue Shopping →</a>
            </div>
        `;

        if (summaryContainer) {
            summaryContainer.innerHTML = `
                <div class="summary-item">
                    <span>Items Total (0)</span>
                    <span>0/-</span>
                </div>
                <div class="summary-total">
                    <span>Grand Total</span>
                    <span>0/-</span>
                </div>
            `;
        }
        return;
    }

    // Render cart items
    let cartHTML = '<div class="cart-items-list">';

    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price}/- each</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });

    cartHTML += '</div>';
    cartContainer.innerHTML = cartHTML;

    // Render dynamic order summary
    if (summaryContainer) {
        const subtotal = getCartTotal();
        const itemCount = getCartItemCount();
        const shipping = subtotal > 5000 ? 0 : 350;
        const grandTotal = subtotal + shipping;

        summaryContainer.innerHTML = `
            <div class="summary-item">
                <span>Items Total (${itemCount})</span>
                <span>${subtotal}/-</span>
            </div>
            <div class="summary-item">
                <span>Shipping Fee</span>
                <span>${shipping === 0 ? '<span style="color: #10b981;">FREE</span>' : shipping + '/-'}</span>
            </div>
            ${shipping === 0 ? '<p style="font-size: 0.8rem; color: #10b981; margin-bottom: 10px;">🎉 Free shipping on orders above 5,000/-</p>' : '<p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 10px;">Free shipping on orders above 5,000/-</p>'}
            <div class="promo-code-box">
                <input type="text" placeholder="Promo Code" id="promo-input">
                <button onclick="applyPromo()">Apply</button>
            </div>
            <div class="summary-total">
                <span>Grand Total</span>
                <span>${grandTotal}/-</span>
            </div>
        `;
    }
}

function applyPromo() {
    const input = document.getElementById('promo-input');
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    if (code === 'NOSTRA10') {
        showNotification('🎉 Promo code applied! 10% off!');
    } else if (code === '') {
        showNotification('Please enter a promo code');
    } else {
        showNotification('Invalid promo code');
    }
}

// Initialize badge on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderCartPage();
});
