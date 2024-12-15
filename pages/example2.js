const cards = [
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg',
    '/assets/images/img-example/133755607_9913008.jpg'
];

const gameBoard = document.getElementById('game-board');

// Remplace la <div> HTML qui contient <img>
function createCard(cardUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardUrl;

    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = cardUrl;
    
    card.appendChild(cardContent);

    // Ecouteur d'évén pour déclencheur le retournement de la carte
    card.addEventListener('click', onCardClick);
    
    return card;
}

// Dupliquer les cards | Pas besoin pour calendrier de l'avent => double pour jeu memory
function duplicateArray(arraySimple){
    let arrayDouble = [];
    //Ajouter 2 fois le contenu du tableau simple ("..." permet d'avoir un tableau a 16 cases, sinon il retourne le tableau dans une case)
    arrayDouble.push(...arraySimple);
    arrayDouble.push(...arraySimple);

    return arrayDouble;
}

const allCards = duplicateArray(cards);

// Parcourir le tableau de 16 cartes (allCards), pour chq cartes je crée une card HTML et pour chq card HTML j'ajoute au game-board
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);
})

// Fonction pour retourner une carte au click
function onCardClick(e) {
    const card = e.target.parentElement;
    card.classList.add('flip');
}