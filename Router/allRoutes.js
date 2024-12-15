import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/createCalendar", "Créer un calendrier", "/pages/createCalendar.html"),
    new Route("/example2", "Exemple2", "/pages/example2.html", "/pages/example2.js"),
    new Route("/exampletest", "Exemple Test", "/pages/exampleTest.html", "/pages/exampleTest.js"),
    new Route("/example", "Exemple", "/pages/example.html", "/pages/example.js"),
    new Route("/register", "Inscription", "/pages/register.html", "/pages/register.js"),
    new Route("/login", "Connexion", "/pages/login.html", "/pages/login.js"),
    new Route("/legacy", "Mentions légales", "/pages/legacy.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Osez Noël";