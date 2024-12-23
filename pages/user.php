<?php
$dsn = 'mysql:host=127.0.0.1;port=3306;dbname=oseznoel';
$username = 'oseznoel_php';
$password = 'M2prpc2l@ON';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Récupérer les utilisateurs 
    $query = "SELECT * FROM users";
    $stmt = $pdo->query($query);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //Afficher les utilisateurs
    foreach ($users as $user) {
        echo "Id : " . $user['idUser'] . "<br>";
        echo "Nom : " . $user['nom'] . "<br>";
        echo "Prenom : " . $user['prenom'] . "<br>";
        echo "Pseudo : " . $user['pseudo'] . "<br>";
        echo "email : " . $user['email'] . "<br>";
        echo "<br>";
    }
} catch (PDOException $e) {
    echo "Erreur de connexion à la base de données : " . $e->getMessage();
}
