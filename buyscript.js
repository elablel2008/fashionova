document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerText = 'Your cart is empty.';
    } else {
        cartItems.innerHTML = cart.map((price, index) => `<p>Item ${index + 1}: $${price.toFixed(2)}</p>`).join('');
        total = cart.reduce((sum, price) => sum + price, 0);
    }

    totalPrice.innerText = total.toFixed(2);
});

function completeCheckout() {
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}
