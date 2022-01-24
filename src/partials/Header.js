import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Modal from '../utils/Modal';

function Header() {

    const [modalOpen, setModalOpen] = useState(false);
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header
            className={`w-full`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-24">

                    {/* Site branding */}
                    <div className="flex-grow mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Nevercamp">
                            <img className="w-14 h-14" src={require('../images/logo.svg').default} width="100"
                                 height="100" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
                        </Link>
                    </div>

                    {/* Site navigation */}
                    <nav className="flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setModalOpen(true);
                                    }} aria-controls="modal">
                                <span>Contactez-nous</span>
                                <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                        fillRule="nonzero"/>
                                </svg>
                            </button>

                        </ul>

                    </nav>
                </div>
            </div>
            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={modalOpen} handleClose={() => setModalOpen(false)}>
                <main className="flex-grow">

                    <section className="bg-gradient-to-b from-gray-100 to-white">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <div className="pt-32 pb-12 md:pt-20 md:pb-20">

                                {/* Page header */}
                                <div className="max-w-xl mx-auto text-center pb-8">
                                    <h1 className="h1 text-gray-900 mb-4">Contact</h1>
                                    <p className="text-xl text-gray-600">Vous pouvez utiliser ce formulaire ou nous contacter sur <span className="text-purple-600">contact@nevercamp.com</span></p>
                                </div>

                                {/* Form */}
                                <div className="max-w-sm mx-auto">
                                    <form>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full px-3">
                                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-pink-400">*</span></label>
                                                <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Votre adresse email" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full px-3">
                                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="entreprise">Entreprise <span className="text-pink-400">*</span></label>
                                                <input id="entreprise" type="text" className="form-input w-full text-gray-800" placeholder="Votre entreprise" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full px-3">
                                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="nom">Nom</label>
                                                <input id="nom" type="text" className="form-input w-full text-gray-800" placeholder="Votre nom" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full h-full px-3">
                                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Message <span className="text-pink-400">*</span></label>
                                                <textarea id="message" className="form-input w-full text-gray-800" placeholder="Votre message" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mt-6">
                                            <div className="w-full px-3">
                                                <button className="btn text-white bg-purple-600 hover:bg-purple-600 w-full">Envoyer le message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>
            </Modal>
        </header>

    );
}

export default Header;
