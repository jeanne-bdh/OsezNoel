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
    1: { image: "/assets/images/surprises/img-surprise-sapin.png", text: "Surprise 1 ! Attention tu vas en avoir pleins les yeux" },
    2: { image: "/assets/images/surprises/img-surprise-kidsillustr.png", text: "Surprise 2 ! Have fun" },
    3: { image: "/assets/images/surprises/img-surprise-mug.png", text: "Surprise 3 : Ton mug de Nöel !" },
    // Ajoutez les données jusqu'au jour 24
    24: { image: "image24.jpg", text: "Surprise du jour 24 !" }
};

// Les constantes
const calendarBoxes = document.querySelectorAll(".num-box");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("img-modal");
const modalText = document.getElementById("text-modal");
const closeBtn = document.getElementById("btn-close");
const modalTitle = document.querySelector(".modal-title");

// Evénement chaque jour
calendarBoxes.forEach(day => {
    day.addEventListener("click", () => {
        const dayNumber = day.dataset.day; // Récupèrer le n° du jour
        const surprise = surprises[dayNumber]; // Récupèrer la surprise du jour
        if (surprise) {
            modalImage.src = surprise.image;
            modalText.textContent = surprise.text;
            modalTitle.textContent = `Jour ${dayNumber}`;
            modal.style.display = "flex"; // Affiche le modal
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

// Contrôle d'accès par date
const today = new Date();
calendarBoxes.forEach(day => {
    const dayNumber = parseInt(day.dataset.day);
    day.addEventListener("click", () => {
        if (dayNumber <= today.getDate()) {
            const surprise = surprises[dayNumber];
            if (surprise) {
                modalImage.src = surprise.image;
                modalText.textContent = surprise.text;
                modal.style.display = "flex";
            }
        } else {
            alert("Patience ! Cette case n'est pas encore disponible.");
        }
    });
});

// Gestion des erreurs à revoir