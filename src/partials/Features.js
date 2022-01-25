import React from 'react';

function Features() {
    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="absolute right-1 top-1/2 transform pointer-events-none" aria-hidden="true">
                <img className="opacity-5" src={require('../images/form-1.svg').default} width="500" height="500" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
            </div>

            <div className="absolute left-48 top-48 transform pointer-events-none" aria-hidden="true">
                <img className="opacity-5" src={require('../images/form-1.svg').default} width="200" height="200" alt="Form2" xmlns="http://www.w3.org/2000/svg"/>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="pt-16 pb-12 md:pt-16 md:pb-16">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pt-12 pb-12 md:pb-16" data-aos="zoom-y-out">
                        <h1 className="h1 mb-4 text-gray-900">Nos services</h1>
                        <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </div>

                    {/* Section content */}

                    <div
                        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>


                    <div className="max-w-lg mx-auto text-center pb-12 md:pb-16 pt-16" data-aos="zoom-y-out">
                        <div className="relative inline-flex">
                            <img className="w-16 h-16 content-center transform animate-float"
                                 src={require('../images/idea.svg').default} width="100" height="100" alt="Element"
                                 style={{top: '0%'}}/>
                        </div>
                        <h3 className="h3 mb-3 text-gray-900">Validation d’idée</h3>
                        <p className="text-xl text-gray-600">Déterminez la viabilité d'un cas d'utilisation métier
                            spécifique.</p>
                    </div>

                    <div
                        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>


                    <div className="max-w-lg mx-auto text-center pb-12 md:pb-16 pt-16" data-aos="zoom-y-out">
                        <div className="relative inline-flex">
                            <img className="w-16 h-16 content-center transform animate-float"
                                 src={require('../images/tech.svg').default} width="100" height="100" alt="Element"
                                 style={{top: '0%'}}/>
                        </div>
                        <h3 className="h3 mb-3 text-gray-900">Validation de technologie</h3>
                        <p className="text-xl text-gray-600">Choisissez la stack technologique la plus appropriée pour
                            façonner votre produit.</p>
                    </div>

                    <div
                        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>


                    <div className="max-w-lg mx-auto text-center pb-24 md:pb-24 pt-16" data-aos="zoom-y-out">
                        <div className="relative inline-flex">
                            <img className="w-16 h-16 content-center transform animate-float"
                                 src={require('../images/poc.svg').default} width="100" height="100" alt="Element"
                                 style={{top: '0%'}}/>
                        </div>
                        <h3 className="h3 mb-3 text-gray-900">Développement POC</h3>
                        <p className="text-xl text-gray-600">Testez vos idées grâce au développement de prototypes.</p>
                    </div>


                        <div
                            className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
                </div>
            </div>

        </section>
    );
}

export default Features;
