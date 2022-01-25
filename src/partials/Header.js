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
                            <img className="h-16" src={require('../images/logo.svg').default} width="110"
                                 height="110" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
                        </Link>
                    </div>

                    {/* Site navigation */}
                    <nav className="flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <button className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3"
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
            <Modal id="modal" ariaLabel="modal-headline" show={modalOpen} handleClose={() => setModalOpen(false)}/>
        </header>

    );
}

export default Header;
