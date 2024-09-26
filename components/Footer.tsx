import React from 'react';

const Footer = () => {
  return (
    <div className='pb-[2rem] pt-[7rem] bg-gray-400'>
      <div className='w-[80%] mx-auto items-center grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>

        {/* Support Section */}
        <div>
          <h1 className='footer_heading'>Support</h1>
          <div className='flex flex-col'>
            <a className='footer__link' href="#">Help Center</a>
            <a className='footer__link' href="#">Safety Information</a>
            <a className='footer__link' href="#">Cancellation Options</a>
            <a className='footer__link' href="#">Medical Doctor</a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h1 className='footer_heading'>Company</h1>
          <div className='flex flex-col'>
            <a className='footer__link' href="#">About Us</a>
            <a className='footer__link' href="#">Community Blog</a>
            <a className='footer__link' href="#">Careers</a>
            <a className='footer__link' href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className='footer_heading'>Contact</h1>
          <div className='flex flex-col'>
            <p className='text-black'>Email: travelPakistan@gmail.com</p>
            <p className='text-black'>Phone: +92 000 00 000</p>
            <p className='text-black'>Your Email: <a href="nisarmuskan14@gmail.com" className='footer__link'>nisarmuskan14@gmail.com</a></p>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h1 className='footer_heading'>Follow Us</h1>
          <div className='flex space-x-4'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='footer__link'>
              Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='footer__link'>
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/muskan-nisar-3135a42b3m" target="_blank" rel="noopener noreferrer" className='footer__link'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className='text-center pt-[2rem]'>
        <p className='text-black opacity-70'>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
