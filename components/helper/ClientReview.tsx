import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
    image: string;
    name: string;
}

const ClientReview = ({ image, name }: Props) => {
  return (
    <div className='p-4'>
      <div>
        <Image 
          src={`${image}`} 
          alt={name} 
          width={80} 
          height={80} 
          className='rounded-full mx-auto'
        />
      </div>

      <p className='mt-[2rem] text-center text-[16px] text-black opacity-60 font-bold'>
        &quot;The trip was incredible! The scenery was stunning, and everything was well-organized. We had an amazing time exploring and enjoying the beautiful sights.&quot;
      </p>
      <div className='mt-[2rem]'>
        <div className='flex w-[100%] text-center justify-center space-x-1'>
          <StarIcon className='w-[1rem] h-[1rem] text-yellow-400' />
          <StarIcon className='w-[1rem] h-[1rem] text-yellow-400' />
          <StarIcon className='w-[1rem] h-[1rem] text-yellow-400' />
          <StarIcon className='w-[1rem] h-[1rem] text-yellow-400' />
          <StarIcon className='w-[1rem] h-[1rem] text-yellow-400' />
        </div>

        <h1 className='mt-[0.5rem] font-bold text-center text-[18px] text-black mb-[0.3rem]'>
          {name}
        </h1>

        <p className='text-center text-black text-[15px] opacity-70'>
          traveller
        </p>
      </div>
    </div>
  );
}

export default ClientReview;
