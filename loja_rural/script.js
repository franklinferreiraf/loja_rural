document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentNode.querySelector('.quantity-input');
        let value = parseInt(input.value);

        if(this.textContent === '+') {
            input.value = value + 1;
        } else if(this.textContent === '-' && value > 1) {
            input.value = value - 1;
        }
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'carrinho.html';
    });
});