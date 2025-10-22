import React, { useState } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <HardHat className="w-8 h-8 text-secondary-600" />
            <span className="text-xl font-bold text-neutral-900">Gruppo Fratelli</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="#products" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Products</a>
            <a href="#about" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Contact</a>
          </nav>

          <a 
            href="mailto:support@gfratelicostruzione.center?subject=Quote Request&body=Hello, I'm interested in your services." 
            className="hidden md:block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-decoration-none"
          >
            Get Quote
          </a>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 py-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Services</a>
              <a href="#products" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Products</a>
              <a href="#about" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Contact</a>
              <a 
                href="mailto:support@gfratelicostruzione.center?subject=Quote Request&body=Hello, I'm interested in your services." 
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium w-fit text-decoration-none"
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
