import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Transition from '../utils/Transition.js';
import {init, send} from '@emailjs/browser';
import {toast} from "react-hot-toast";


init("user_ADw37CgHSX5hLZIBKErhM");

function Modal({
                   id,
                   ariaLabel,
                   show,
                   handleClose
               }) {

    const modalContent = useRef(null);

    // close the modal on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!show || modalContent.current.contains(target)) return;
            handleClose();
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close the modal on click outside
    useEffect(() => {
        const scrollHandle = ({target}) => {
            if (!show || modalContent.current.contains(target)) return;
            handleClose();
        };
        document.addEventListener('scroll', scrollHandle);
        return () => document.removeEventListener('scroll', scrollHandle);
    });

    // close the modal if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (keyCode !== 27) return;
            handleClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    const [toSend, setToSend] = useState({
        email: '',
        entreprise: '',
        nom: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_vzi4jeh',
            'template_jedbnl9',
            toSend,
            'user_ADw37CgHSX5hLZIBKErhM'
        )
            .then((response) => {
                    toast.success("Message envoyé ! Nous revenons vers vous le plus vite possible.", {
                    duration: 10000,
                    position: 'top-center',
                    icon: '👌',
                    style: {color: '#FFFFFF', background: '#00c853',
                    }
                });
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                toast.error("Erreur, message non envoyé", {
                    duration: 10000,
                    position: 'top-center',
                    icon: '⚠️',
                    style: {color: '#FFFFFF', background: '#d50000',
                    }
                });
                console.log('FAILED...', err);
            });
    };

    return (
        <>

            {/* Modal backdrop */}
            <Transition
                className="fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity blur"
                show={show}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />

            {/* Modal dialog */}
            <Transition
                id={id}
                className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby={ariaLabel}
                show={show}
                enter="transition ease-out duration-200"
                enterStart="opacity-0 scale-95"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-95"
            >

                <div className="bg-black overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>
                    <main className="flex-grow">
                        <section className="bg-gradient-to-b from-gray-100 to-white">

                            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                                <div className="pt-32 pb-12 md:pt-20 md:pb-20">

                                    {/* Page header */}
                                    <div className="max-w-xl mx-auto text-center pb-8">
                                        <h1 className="h1 text-gray-900 mb-4">Contact</h1>
                                        <a className="text-xl text-gray-600" href='mailto:contact@nevercamp.com'>Vous pouvez utiliser ce formulaire ou nous
                                            contacter sur <span className="text-purple-600">contact@nevercamp.com</span>
                                        </a>
                                    </div>

                                    {/* Form */}
                                    <div className="max-w-sm mx-auto">
                                        <form className="contact" onSubmit={handleSubmit}>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1"
                                                           htmlFor="email">Email <span
                                                        className="text-pink-400">*</span></label>
                                                    <input id="email" type="email" name="email" onChange={handleChange}
                                                           className="form-input w-full text-gray-800"
                                                           placeholder="Votre adresse email" required/>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1"
                                                           htmlFor="entreprise">Entreprise <span
                                                        className="text-pink-400">*</span></label>
                                                    <input id="entreprise" name="entreprise" type="text"
                                                           onChange={handleChange}
                                                           className="form-input w-full text-gray-800"
                                                           placeholder="Votre entreprise" required/>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1"
                                                           htmlFor="nom">Nom <span
                                                        className="text-pink-400">*</span></label>
                                                    <input id="nom" name="nom" type="text" onChange={handleChange}
                                                           className="form-input w-full text-gray-800"
                                                           placeholder="Votre nom" required/>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full h-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1"
                                                           htmlFor="message">Message <span
                                                        className="text-pink-400">*</span></label>
                                                    <textarea id="message" name="message" onChange={handleChange}
                                                              className="form-input w-full text-gray-800"
                                                              placeholder="Votre message" required/>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mt-6">
                                                <div className="w-full px-3">
                                                    <button type="submit"
                                                            className="btn text-white bg-purple-600 hover:bg-purple-600 w-full">Envoyer
                                                        le message
                                                    </button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </Transition>
        </>
    );
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    id: PropTypes.string,
    ariaLabel: PropTypes.string,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};
