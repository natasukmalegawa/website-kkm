import React from 'react';
import { Search, Menu } from 'lucide-react';

// DummyLogo as provided in the problem description
const DummyLogo = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,5 A20,20,0,0,1,70,25 L70,75 A20,20,0,0,1,50,95 A20,20,0,0,1,30,75 L30,25 A20,20,0,0,1,50,5 Z" stroke="currentColor" strokeWidth="8" fill="none" />
    <circle cx="50" cy="50" r="15" fill="currentColor" />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                 w-auto max-w-md  // Can be max-w-lg or other as preferred
                 px-6 py-3 
                 bg-white/80 backdrop-blur-lg 
                 border border-neutral-200/80 
                 rounded-full 
                 shadow-md 
                 flex items-center justify-between"
    >
      <div className="flex items-center">
        <DummyLogo />
        {/* Optional: Add site name next to logo */}
        {/* <span className="ml-2 text-lg font-semibold text-neutral-800">LogoText</span> */}
      </div>
      <div className="flex items-center space-x-4">
        <button 
          aria-label="Search" 
          className="text-neutral-700 hover:text-black transition-colors"
        >
          <Search size={20} />
        </button>
        <button 
          aria-label="Menu" 
          className="text-neutral-700 hover:text-black transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
