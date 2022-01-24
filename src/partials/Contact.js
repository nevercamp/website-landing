import React, {useState} from 'react';
import Modal from "../utils/Modal";

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-100 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden animate-float" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <img className="" src={require('../images/form-3.svg').default} width="600" height="600" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h1 text-black mb-2">Une question ?</h3>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-left max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-600 shadow" onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setModalOpen(true);
                    }} aria-controls="modal">Contactez-nous</button>
                  </div>
                </form>
              </div>

            </div>

          </div>

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
    </section>
  );
}

export default Contact;
