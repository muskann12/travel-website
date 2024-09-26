import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
      {/* Image Section */}
      <div>
        <Image 
          src='/images/plane.png'
          alt='plane'
          width={600}
          height={400}
          className='object-contain mx-auto p-[1rem]' 
        />
      </div>

      {/* Subscription Section */}
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-center w-[90%] xl:w-[70%] tracking-[0.1rem] mx-auto font-bold text-[20px] md:text-[30px] text-black'>
          Get Special Offers
        </h1>
        <p className='mt-[0.7rem] w-[80%] xl:w-[60%] mx-auto text-center text-[15px] text-black opacity-70'>
          Subscribe to see the secret deals, prices drop the moment you sign up.
        </p>
        <div className='flex mt-[1.4rem] rounded-lg mb-[3rem] items-center space-x-2 w-[80%] h-[4rem] md:h-[6.3vh] border border-gray-300 p-2'>
          <input  
            className='bg-transparent w-[80%] h-[100%] border-none outline-none pl-2 text-black'
            type="email"
            placeholder='Enter your email address' 
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
