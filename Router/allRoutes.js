import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/createCalendar", "Créer un calendrier", "/pages/createCalendar.html"),
    new Route("/example", "Exemple", "/pages/example2.html", "/pages/example2.js"),
    new Route("/register", "Inscription", "/pages/register.html"),
    new Route("/login", "Connexion", "/pages/login.html", "/pages/login.js"),
    new Route("/legacy", "Mentions légales", "/pages/legacy.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Osez Noël";