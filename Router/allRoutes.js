import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("createCalendar", "Create Calendar", "/pages/createCalendar.html"),
    new Route("example", "Example", "/pages/example.html"),
    new Route("register", "Register", "/pages/register.html"),
    new Route("login", "Login", "/pages/login.html"),
    new Route("legacy", "Mentions légales", "/pages/legacy.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Osez Noël";