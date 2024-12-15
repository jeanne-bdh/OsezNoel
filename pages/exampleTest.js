const calendarBoard = document.getElementById('calendar-board');

const totalBoxes = 24;

function createNumBox() {
    for (let i = 1; i <= totalBoxes; i++) {
        const numBox = document.createElement('div');
        numBox.classList.add('col-auto', 'num-box');
        numBox.textContent = i;

        calendarBoard.appendChild(numBox);
    }
}

createNumBox();

document.getElementById('calendar-board').addEventListener('click', function () {
    let myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
});