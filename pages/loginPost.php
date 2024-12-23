<?php
$dsn = 'mysql:host=127.0.0.1;port=3306;dbname=oseznoel';
$username = 'oseznoel_php';
$password = 'M2prpc2l@ON';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les données du formulaire de connexion
    $identifiantForm = $_POST['identifiant'];
    $passwordForm = $_POST['password'];

    // Récupérer les utilisateurs 
    $query = "SELECT * FROM users WHERE idUser = :idUser";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':idUser', $identifiantForm);
    $stmt->execute();

    // Est-ce que l’utilisateur (email) existe ?
    if ($stmt->rowCount() == 1) {
        $monUser = $stmt->fetch(PDO::FETCH_ASSOC);

        // Se connecter à la session
        if (password_verify($passwordForm, $monUser['password'])) {
            $_SESSION['monUser'] = $monUser;
            header('location: /sessionAdmin');
        } else {
            // Le mot de passe est incorrect
            $errors[] = "Mot de passe incorrect (à changer)";
        }
    } else {
        // L'email n'existe pas
        $errors[] = "Utilisateur introuvable, êtes-vous sûr de votre mail ? (à changer)";
    }
} catch (PDOException $e) {
    echo "Erreur de connexion à la base de données : " . $e->getMessage();
}
