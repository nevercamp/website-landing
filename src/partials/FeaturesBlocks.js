import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>

      <div className="absolute right-24 top-1/3 transform pointer-events-none" aria-hidden="true">
        <img className="opacity-10" src={require('../images/form-2.svg').default} width="200" height="200" alt="Form3" xmlns="http://www.w3.org/2000/svg"/>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="zoom-y-out">
            <h2 className="h1 mb-4">Notre approche</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 pb-16 bg-pink-400 rounded shadow-xl" data-aos="zoom-y-out"data-aos-delay="100">
              <h4 className="text-4xl p-8 font-bold leading-snug tracking-tight mb-1">Efficacité</h4>
              <p className="text-center">Testez vos hypothèses EN JOURS OU SEMAINES, pas en mois.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 pb-16 bg-gradient-100 rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="250">
              <h4 className="text-4xl p-8 font-bold leading-snug tracking-tight mb-1">Agilité</h4>
              <p className="text-center">Vous êtes membre à part entière du processus de développement.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 pb-16 bg-purple-600 rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="400">
              <h4 className="text-4xl p-8 font-bold leading-snug tracking-tight mb-1">Transparence</h4>
              <p className="text-center">Nous vous tenons informés en continu de l’évolution du projet.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
