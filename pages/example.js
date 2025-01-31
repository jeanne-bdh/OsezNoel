// Boucle HTML .num-box
const rowNum = document.getElementById('row-numbers');
const totalNumbers = 24;

// Boucle pour créer chaque élément
for (let i = 1; i <= totalNumbers; i++) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-lg-2', 'col-md-2', 'col-sm-4', 'col-4');

    // Box avec numéro
    const numBox = document.createElement('div');
    numBox.classList.add('num-box');
    numBox.textContent = i;
    numBox.setAttribute('data-day', i);

    colDiv.appendChild(numBox);
    rowNum.appendChild(colDiv);
}

// Liste des surprises
const surprises = {
    1: { image: "/assets/images/surprises/img-surprise-sapin.png", text: "Attention tu vas en avoir pleins les yeux !!" },
    2: { image: "/assets/images/surprises/img-surprise-kidsillustr.png", text: "Have fun" },
    3: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 3 : Ton mug de Nöel !" },
    4: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 4 : Ton mug de Nöel !" },
    5: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 5 : Ton mug de Nöel !" },
    6: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 6 : Ton mug de Nöel !" },
    7: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 7 : Ton mug de Nöel !" },
    8: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 8 : Ton mug de Nöel !" },
    9: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 9 : Ton mug de Nöel !" },
    10: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 10 : Ton mug de Nöel !" },
    11: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 11 : Ton mug de Nöel !" },
    12: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 12 : Ton mug de Nöel !" },
    13: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 13 : Ton mug de Nöel !" },
    14: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 14 : Ton mug de Nöel !" },
    15: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 15 : Ton mug de Nöel !" },
    16: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 16 : Ton mug de Nöel !" },
    17: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 17 : Ton mug de Nöel !" },
    18: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 18 : Ton mug de Nöel !" },
    19: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 19 : Ton mug de Nöel !" },
    20: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 20 : Ton mug de Nöel !" },
    21: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 21 : Ton mug de Nöel !" },
    22: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 22 : Ton mug de Nöel !" },
    23: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 23 : Ton mug de Nöel !" },
    24: { image: "/assets/images/surprises/img-surprise-joyeux-noel.png", text: "Surprise du jour 24 !" }
};

// Les constantes
const calendarBoxes = document.querySelectorAll(".num-box");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("img-modal");
const modalText = document.getElementById("text-modal");
const closeBtn = document.getElementById("btn-close");
const modalTitle = document.querySelector(".modal-title");

// Contrôle d'accès par date
const today = new Date();
calendarBoxes.forEach(day => {
    const dayNumber = parseInt(day.dataset.day); // Récupèrer le n° du jour

    day.addEventListener("click", () => {
        if (dayNumber <= today.getDate()) {
            const surprise = surprises[dayNumber]; // Récupèrer la surprise du jour
            if (surprise) {
                
                // Appliquer le style "active" à la case cliquée
                day.classList.add("active");

                modalImage.src = surprise.image;
                modalText.textContent = surprise.text;
                modalTitle.textContent = `Jour ${dayNumber}`;
                modal.style.display = "flex"; // Affiche le modal
            }
        } else {
            // Affiche la modal patience
            modalPatience.style.display = "flex";
        }
    });
});

// Fermeture sur bouton
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermeture clic extérieur
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Gestion des erreurs à revoir



// MODAL PATIENCE

// Récupération des éléments de la modal "Patience"
const modalPatience = document.getElementById("modal-patience");
const closePatienceBtn = document.getElementById("btn-close-patience");

// Fermeture de la modal "Patience"
closePatienceBtn.addEventListener("click", () => {
    modalPatience.style.display = "none";
});

// Fermeture clic extérieur pour la modal "Patience"
window.addEventListener("click", (event) => {
    if (event.target === modalPatience) {
        modalPatience.style.display = "none";
    }
});