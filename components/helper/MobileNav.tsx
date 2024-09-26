import { XMarkIcon } from '@heroicons/react/24/solid'; // Make sure you're using the correct version
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-y-0" : "translate-y-full"; // Changed to translate-y-full for better animation

    return (
        <div className={`fixed ${navAnimation} transform transition-transform duration-300 top-0 left-0 right-0 h-full z-50 bg-gray-300`}>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='nav-link-mobile'>Home</div>
                <div className='nav-link-mobile'>Tour</div>
                <div className='nav-link-mobile'>Hotel</div>
                <div className='nav-link-mobile'>Review</div>
                <div className='nav-link-mobile'>Contact</div>

                <a href="#" className='relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-gray-300 bg-blue-900 rounded-lg group'>
                    <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-900 rounded-full group-hover:w-56 group-hover:h-56'></span>
                    <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-r from-gray-50 via-transparent to-gray-700'></span>
                    <span className='relative z-10'>Book Now</span>
                </a>
            </div> 
            <div onClick={closeNav} className='absolute cursor-pointer top-4 right-4 w-8 h-8 text-black'>
                <XMarkIcon className="w-full h-full" />
            </div>   
        </div>
    );
}

export default MobileNav;
