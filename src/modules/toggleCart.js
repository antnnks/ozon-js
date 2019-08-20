export default function toggleCart() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');

    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        // modalCart.style.backgroundColor = 'red';
        // modalCart.style.cssText = 'display: flex; font-size: 30px';
        document.body.style.overflow = 'hidden';
    });

    const btnClose = document.querySelector('.cart-close');

    btnClose.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}