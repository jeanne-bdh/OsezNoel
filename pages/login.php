<section class="bg-form">

    <div class="container-fluid container-form-style bg-secondary" id="form-login">
        <h4 class="text-black text-center mb-3 fs-4">CONNEXION</h4>
        <form action="loginPost.php" method="post" class="px-5">
            <div class="mb-3">
                <label for="idInputCo" class="form-label col-form-label-sm text-black">Identifiant :</label>
                <input type="text" class="form-control form-control-sm" id="idInputCo" name="identifiant" required>
                <div class="invalid-feedback">
                    Veuillez entrer un identifiant ayant entre 3 à 50 caractères
                </div>
            </div>
            <div class="mb-3">
                <label for="passwordInputCo" class="form-label col-form-label-sm text-black">Mot de passe :</label>
                <input type="password" class="form-control form-control-sm" id="passwordInputCo" name="password" required>
                <div class="invalid-feedback">
                    Le mot de passe doit contenir au moins 8 caractères comprenant une lettre majuscule, une
                    minuscule, un chiffre et un caractère
                    spécial
                </div>
            </div>
            <div class="text-center mt-4">
            <button type="submit" class="btn btn-dark dark-button" id="btn-validCo">Se connecter</button>
        </div>
        </form>
        <div class="text-center pt-3">
            <a class="text-black" href="/register">Vous n’avez pas de compte ? <br> Inscrivez-vous ici !</a>
        </div>
    </div>

    <!-- FOOTER (= HOME) -->
    <footer class="container my-3">
        <hr class="w-75 mx-auto text-white border-2 rounded-5">
        <p class="text-center">&copy; 2024 Osez Noël - Tous droits réservés - <a href="/legalinfos">Mentions légales</a>
        </p>
    </footer>

</section>