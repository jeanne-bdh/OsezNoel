const calendarBoard = document.getElementById('calendar-board');

const totalBoxes = 24;

function createNumBox() {
    for (let i = 1; i <= totalBoxes; i++) {
        const numBox = document.createElement('div');
        numBox.classList.add('col-auto', 'num-box');
        numBox.textContent = i;

        // Ecouteur d'évén pour déclencheur le retournement de la carte
        numBox.addEventListener('click', onCardClick);

        calendarBoard.appendChild(numBox);
    }
}

createNumBox();

// Fonction pour retourner une carte au click
function onCardClick(e) {
    const numBox = e.target.parentElement;
    numBox.classList.add('flip');
}

