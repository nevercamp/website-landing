import React from 'react';
import {Player} from "@lottiefiles/react-lottie-player";

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-20 md:pb-20">

          {/* Section header */}
          <div className="w-full text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Partenaire technologique pour{"\n"}<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">entreprises innovantes</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl text-gray-300 mb-2" data-aos="zoom-y-out" data-aos-delay="150">Nous vous aidons à relever vos défis techniques.</p>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="justify-center mb-2" data-aos="zoom-y-out" data-aos-delay="450">
              <Player
                    autoplay
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_nt5wjxl5.json"
                    style={{ height: '400px'}}
                >
                </Player>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;