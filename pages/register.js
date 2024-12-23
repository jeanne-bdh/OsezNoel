const inputIdReg = document.getElementById("idInputReg");
const inputEmailReg = document.getElementById("emailInputReg");
const inputNomReg = document.getElementById("nomInputReg");
const inputPrenomReg = document.getElementById("prenomInputReg");
const inputPwdReg = document.getElementById("pwdInputReg");
const inputValidPwd = document.getElementById("validPwdInputReg");
const btnValidReg = document.getElementById("btn-validReg");

inputIdReg.addEventListener("keyup", validateForm);
inputEmailReg.addEventListener("keyup", validateForm);
inputNomReg.addEventListener("keyup", validateForm);
inputPrenomReg.addEventListener("keyup", validateForm);
inputPwdReg.addEventListener("keyup", validateForm);
inputValidPwd.addEventListener("keyup", validateForm);

// Fonction valide le formulaire
function validateForm() {
    const idOk = validateIdReg(inputIdReg);
    const emailOk = validateEmail(inputEmailReg);
    const nomOk = validateRequired(inputNomReg);
    const prenomOk = validateRequired(inputPrenomReg);
    const passwordOk = validatePassword(inputPwdReg);
    const confirmPwdOk = validateConfirmPwd(inputPwdReg, inputValidPwd);

    // Pour que le bouton soit cliquable
    if (idOk && emailOk && nomOk && prenomOk && passwordOk && confirmPwdOk) {
        btnValidReg.disabled = false;
    }
    else {
        btnValidReg.disabled = true;
    }
}

// Fonction valide l'identifant
function validateIdReg(input) {
    const idRegRegex = /^[a-zA-Z0-9._-]{3,50}$/;
    const idRegUser = input.value;
    if (idRegUser.match(idRegRegex)) {
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

// Fonction valide l'email
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
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
function validatePassword(input) {
    const pwdRegRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const pwdRegUser = input.value;
    if (pwdRegUser.match(pwdRegRegex)) {
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

// Fonction valide la confirmation du mot de passe
function validateConfirmPwd(inputPwd, inputConfirmPwd) {
    if (!inputPwd.value || !inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
    if (inputPwd.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> develop
