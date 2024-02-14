let sizeMultiplier = 1.6;
let currentPhraseIndex = 0;
const phrases = [
    "¿Estás segura?",
    "¿En serio?",
    "Por favor...",
    "¿Te doy más tiempo para pensar?",
    "Si dices que no, estaré muy triste.",
    "MUY MUUUUUUUY TRISTE ;(",
    "Está bien, dejaré de preguntar...",
    "MENTIRA, POR FAVOR, DÍ QUE SÍ",
    "Estás rompiendo mi corazón </3",
    "No"
];

function increaseSize() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    noBtn.textContent = phrases[currentPhraseIndex];

    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    const currentSize = window.getComputedStyle(yesBtn, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) * sizeMultiplier;
    yesBtn.style.fontSize = newSize + 'px';

    noBtn.style.marginTop = '10px';
    noBtn.style.marginBottom = '10px';
}

function showConfirmation() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const newImage = document.createElement('img');
    newImage.src = './assets/img/Osito_2.gif';
    newImage.alt = 'Confirmación';
    newImage.className = 'center-image';

    const newText = document.createElement('p');
    newText.className = 'confirmation-text';
    newText.textContent = 'LO SUPONÍA... 🥱';
    newText.style.fontSize = '2rem';
    newText.style.textAlign = 'center';

    container.appendChild(newImage);
    container.appendChild(newText);
}