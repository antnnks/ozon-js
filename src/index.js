'use srict';

// checkbox

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function(element) {
    element.addEventListener('change', function(){
        if(this.checked){
        this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
}); 


// for (let i = 0; i < checkbox.length; i++){
// checkbox[i].addEventListener('change', function(){
//     if(this.checked){
//     this.nextElementSibling.classList.add('checked');
//     } else {
//         this.nextElementSibling.classList.remove('checked');
//     }
//     });
// }

//end checkbox 


//корзина

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

//end корзина

//работа с товаром

const cards = document.querySelectorAll('.goods .card'),
cartWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document.getElementById('cart-empty'),
countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn =  card.querySelector('button');

    btn.addEventListener('click', () =>{
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
    
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
};


//end работа с товаром