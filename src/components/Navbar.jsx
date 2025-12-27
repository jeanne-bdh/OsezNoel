import logo from '../assets/images/home/logo.avif'

const Navbar = () => {
    return (
        <header className="text-gray-600 bg-dark">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                    <img src={ logo } alt="arbre de Noel en logo" />
                    <span className="ml-3 text-4xl text-white font-title">Osez Noël</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 text-white hover:underline" href="/">Accueil</a>
                    <a className="mr-5 text-white hover:underline" href="/">Créer un calendrier</a>
                    <a className="mr-5 text-white px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black" href="/">S'inscrire</a>
                    <a className="mr-5 text-white px-4 py-2 bg-primary rounded-lg hover:bg-secondary" href="/">Se connecter</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
