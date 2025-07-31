import React from 'react'

export const Navbar = () => {

const navItems = ['about', 'projects', 'contact'];

  return (
    <div 
        className="fixed inset-x-0 top-4 z-50 h-10 border-b-4 border-black transition-all duration-700 sm:inset-x-6"
    >
        <header class="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <a href="#home">
                    <img src="/photos/LOGO.png" alt="Logo" className="h-10 w-auto"/>
                    </a>
                </div>    
                <div className="absolute left-1/2 -translate-x-1/2">
                    <a className="font-quint text-5x1 uppercase">
                        Adam Bucholtz
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}  className="nav-hover-btn">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
