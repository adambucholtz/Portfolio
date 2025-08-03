import React from 'react';

export const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-4 z-50 h-10 border-b-4 border-black transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="#home">
              <img src="/photos/LOGO.png" alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Center: Name */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a className="font-quint text-5x1 uppercase">
              Adam Bucholtz
            </a>
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex">
              {/* About Link */}
              <a href="#about" className="nav-hover-btn">
                about
              </a>

                {/* Works Dropdown */}
                <div className="relative group">
                <a href="#works" className="nav-hover-btn">
                    works
                </a>
                <div className="absolute right-1 mt-2 w-80 rounded-xl bg-primary-theme border border-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                    <ul className="py-2 text-base text-[#080808] font-tinos tracking-wide">
                    <li>
                        <a href="#Project_fan_bridge" className="block px-6 py-3 transition-all duration-300 hover:bg-[#f6f6f6] hover:pl-8 hover:shadow-inner">
                        Fan - Subtract - Bridge
                        </a>
                    </li>
                    <li>
                        <a href="#Project_oasis" className="block px-6 py-3 transition-all duration-300 hover:bg-[#f6f6f6] hover:pl-8 hover:shadow-inner">
                        The Oasis
                        </a>
                    </li>
                    <li>
                        <a href="#Project_shift" className="block px-6 py-3 transition-all duration-300 hover:bg-[#f6f6f6] hover:pl-8 hover:shadow-inner">
                        The Shift
                        </a>
                    </li>
                    <li>
                        <a href="#Project_leimert" className="block px-6 py-3 transition-all duration-300 hover:bg-[#f6f6f6] hover:pl-8 hover:shadow-inner">
                        Leimert Park Arts Center
                        </a>
                    </li>
                    <li>
                        <a href="#Project_network" className="block px-6 py-3 transition-all duration-300 hover:bg-[#f6f6f6] hover:pl-8 hover:shadow-inner">
                        The Network
                        </a>
                    </li>
                    </ul>
                </div>
                </div>

              {/* Contact Link */}
              <a href="#contact" className="nav-hover-btn">
                contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
