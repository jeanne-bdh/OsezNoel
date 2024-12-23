const inputIdCo = document.getElementById("idInputCo");
const inputPasswordCo = document.getElementById("passwordInputCo");
const btnValidCo = document.getElementById("btn-validCo");

inputIdCo.addEventListener("keyup", validateFormCo);
inputPasswordCo.addEventListener("keyup", validateFormCo);

// Fonction valide le formulaire
function validateFormCo() {
    const idCoOk = validateIdCo(inputIdCo);
    const passwordCoOk = validatePasswordCo(inputPasswordCo);

    // Pour que le bouton soit cliquable
    if (idCoOk && passwordCoOk) {
        btnValidCo.disabled = false;
    }
    else {
        btnValidCo.disabled = true;
    }
}

// Fonction valide l'identifant
function validateIdCo(input) {
    const idCoRegex = /^[a-zA-Z0-9._-]{3,50}$/;
    const idCoUser = input.value;
    if (idCoUser.match(idCoRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction valide le mot de passe
function validatePasswordCo(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}