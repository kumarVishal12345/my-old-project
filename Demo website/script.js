// menuScript.js

let cart = [];
let total = 0;

function addItem(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // Clear previous items
    cartItems.innerHTML = '';

    // Update cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total
    total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}
