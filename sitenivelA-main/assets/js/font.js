// Seleciona os botões
let decreaseButton = document.getElementById('decrease-font-size');
let increaseButton = document.getElementById('increase-font-size');

// Função para diminuir o tamanho da fonte
decreaseButton.addEventListener('click', function() {
    // Obtém o tamanho atual da fonte do html
    let currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Diminui o tamanho da fonte em 1px
    document.documentElement.style.fontSize = (currentFontSize - 1) + 'px';
});

// Função para aumentar o tamanho da fonte
increaseButton.addEventListener('click', function() {
    // Obtém o tamanho atual da fonte do html
    let currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Aumenta o tamanho da fonte em 1px
    document.documentElement.style.fontSize = (currentFontSize + 1) + 'px';
});
