import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/login", "Connexion", "/pages/login.php", "/pages/login.js"),
    new Route("/register", "Inscription", "/pages/register.html", "/pages/register.js"),
    new Route("/createCalendar", "Formulaire de création calendrier", "/pages/formCalendar.html"),
    new Route("/example", "Exemple de calendrier", "/pages/example.html", "/pages/example.js"),
    new Route("/legalinfos", "Mentions légales", "/pages/legalinfos.html"),
    new Route("/privacyPolicy", "Politique de confidentialité", "/pages/privacyPolicy.html"),
    new Route("/CGU", "CGU", "/pages/CGU.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Osez Noël";