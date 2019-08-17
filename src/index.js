'use srict';

// checkbox

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach(function (element) {
        element.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}

//end checkbox 



//корзина

function toggleCart() {
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

//end корзина



//работа с товаром

function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');



    cards.forEach((card) => {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');

        countGoods.textContent = cardsCart.length;

        let sum = 0;
        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;

        if (cardsCart.length === 0) {
            cartWrapper.appendChild(cartEmpty);
        } else {
            cartEmpty.remove();
        }

    }
}

//end работа с товаром



//фильтр акции

function actionPage() {

    const cards = document.querySelectorAll('.goods .card'),
    discountCheckbox = document.getElementById('discount-checkbox');

    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (discountCheckbox.checked){
                if (!card.querySelector('.card-sale')){
                    card.parentNode.style.display = 'none';
                }
            } else {
                card.parentNode.style.display = '';
            }
        });
    });


}




//end фильтр акции


toggleCheckbox();
toggleCart();
addCart();
actionPage();