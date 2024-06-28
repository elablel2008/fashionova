function addToCart(price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(price);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function checkout() {
    window.location.href = 'checkout.html';
}
