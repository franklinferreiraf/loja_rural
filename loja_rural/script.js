// Detecta o tamanho da tela e carrega o CSS correspondente
const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  document.write('<link rel="stylesheet" href="css/pequena/style.css">');
} else if (screenWidth > 768 && screenWidth <= 1024) {
  document.write('<link rel="stylesheet" href="css/media/style.css">');
} else {
  document.write('<link rel="stylesheet" href="css/grande/style.css">');
}


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