import React from 'react';

function Expertise() {
    return (
        <section className="relative">

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    <div
                        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

                    <div className="absolute left-32 top-1/3 transform pointer-events-none" aria-hidden="true">
                        <img className="opacity-10" src={require('../images/form-2.svg').default} width="400" height="400" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
                    </div>

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pt-24 pb-12 md:pb-16" data-aos="zoom-y-out">
                        <h2 className="h1 mb-4">Notre expertise</h2>
                        <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris
                            rhoncus viverra nibh cras pulvinar mattis
                            blandit libero cursus mattis.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto text-center pb-12 md:pb-16">
                        <h2 className="max-w-lg fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="50">IA</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="100">BLOCKCHAIN</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="150">WEB 3.0</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="200">DEVOPS</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="250">MOBILE</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="300">DESKTOP</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="350">DATABASE</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="400">IOT</h2>
                        <h2 className="max-w-xl fill-current h3 mb-4 font-extrabold text-gray-500" data-aos="zoom-y-out" data-aos-delay="450">COMPRESSION</h2>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Expertise;