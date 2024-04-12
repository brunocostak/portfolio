import React, { useState } from 'react';
import logo from '../assets/icons8-programador-64.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-900 fixed w-full z-20">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center w-full"> {/* Movido o contêiner flex para englobar o logo e o menu */}
                        <div className="hidden md:flex md:justify-end flex-grow ml-4"> {/* Adicionado margin left ao menu para separar do logo */}
                            <div className="flex-shrink-0">
                                <img src={logo} title="Logo" alt="Logo" className="h-10 w-auto px-3 py-2" />
                            </div>
                            <div className="flex items-baseline space-x-4">
                                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#habilidades" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Habilidades</a>
                                <a href="#projetos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projetos</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden justify-between w-full">
                        <div className="flex-shrink-0">
                            <img src={logo} title="Logo" alt="Logo" className="h-10 w-auto px-3 py-2" />
                        </div>
                        <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden flex-col items-center justify-center">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="#habilidades" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Habilidades</a>
                            <a href="#projetos" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projetos</a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
