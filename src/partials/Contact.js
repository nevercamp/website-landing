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
            <div className="absolute right-16 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <img className="" src={require('../images/form-3.svg').default} width="600" height="600" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h1 text-black mb-2">Un besoin ?</h3>

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
      <Modal id="modal" ariaLabel="modal-headline" show={modalOpen} handleClose={() => setModalOpen(false)}/>
    </section>
  );
}

export default Contact;
