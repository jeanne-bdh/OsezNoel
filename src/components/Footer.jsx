import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="border-t border-gray-200"> 
            </div>
                <div className="mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                    <p className="text-center">© 2024 Osez Noël - Tous droits réservés - <a href={ legal } className="ml-1 underline hover:no-underline" target="_blank">Mentions légales</a>
                    <Link to="/legalinfos"> </Link>
                    </p>
                </div>
        </footer>
    )
}

export default Footer;