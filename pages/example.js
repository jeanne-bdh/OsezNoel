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

    // Ajouter l'événement pour ouvrir le modal
    numBox.addEventListener("click", () => {
        const surprise = surprises.find(item => item.day === i);
        if (surprise) {
            displaySurprise(surprise);
        } else {
            alert("Pas de surprise pour ce jour !");
        }
    });

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
function displaySurpise(surprise) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("img-modal");
    const modalText = document.getElementById("text-modal");
    const modalTitle = document.querySelector(".modal-title");

    modalImage.src = surprise.image || "";
    modalText.textContent = surprise.description || "Pas de description disponible.";
    modalTitle.textContent = `Jour ${surprise.day}: ${surprise.title}`;
    modal.style.display = "flex";
}


// Fermeture sur bouton
const closeBtn = document.getElementById("btn-close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermeture clic extérieur
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Fonction pour charger le fichier JSON
async function loadSurprises() {
    const response = await fetch('/pages/surprises.json');
    const surprises = await response.json();
    return surprises;
}

// Gestion des erreurs à revoir