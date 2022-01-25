import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <a style={{textDecoration: 'none'}} href="https://fr.linkedin.com/company/nevercamp" target={"_blank"} rel="noreferrer">
              <img className="opacity-90 " src={require('../images/linkedin-icon.svg').default} width="32" height="32" alt="Logo" xmlns="http://www.w3.org/2000/svg"/>
            </a>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Fait par <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Nevercamp</span>. Tous droits réservés.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
