

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for Next.js routing
import { Bars3Icon } from '@heroicons/react/24/solid'; // Ensure you're using the correct version

interface Props {
    openNav: () => void; // Function to open the mobile navigation
}

const Navbar = ({ openNav }: Props) => {
    return (
        <div className='w-full bg-gradient-to-r from-gray-100 to-gray-300'>
            <div className='flex w-[80%] mx-auto items-center justify-between h-[13vh]'>
                {/* Logo Section */}
                <div className='relative w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]'>
                    <Image src="/images/travellogo.png" alt="Logo" layout="fill" objectFit="contain" />
                </div>

                {/* Navigation Links */}
                <div className='hidden lg:flex items-center space-x-12'>
                    <Link href="/" className='nav-links'>Home</Link>
                    <Link href="#r" className='nav-links'>Tour</Link>
                    <Link href="/Hotels.tsx" className='nav-links'>Hotels</Link>
                    <Link href="/Reviews.tsx" className='nav-links'>Review</Link>
                    <Link href="./components/Contact.tsx" className='nav-links'>Contact</Link>
                    
                    {/* Book Now Button */}
                    <Link href="/book-now" className='relative items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-gray-300 bg-blue-900 rounded-lg group'>
                        <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-900 rounded-full group-hover:w-56 group-hover:h-56'></span>
                        <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-r from-gray-50 via-transparent to-gray-700'></span>
                        <span className='relative z-10'>Book Now</span>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <Bars3Icon onClick={openNav} className='w-8 h-8 text-black font-bold lg:hidden' />
            </div>
        </div>
    );
};

export default Navbar;
