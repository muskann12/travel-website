import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
    image: string;
    name: string;
    city : string;
    reviewNum: string;
    price: string;
}

const HotelCard = ({name, city , image , price , reviewNum}:Props) => {
  return (
    <div className='cursor-pointer bg-white rounded-md overflow-auto'>
        <div className=' relative overflow-hidden w-[100%] h-[20rem]'>
        <Image src={`${image}`} alt={name} className='transform object-cover transition-all duration-700 scale-100 hover:scale-125'
        layout='fill' />
    </div> 

    <div className='p-[1.4rem]'>
        <div className='flex items-center'>
            <StarIcon  className=' text-yellow-400 w-[1rem] h-[1rem]'/>
            <StarIcon  className=' text-yellow-400 w-[1rem] h-[1rem]'/>
            <StarIcon  className=' text-yellow-400 w-[1rem] h-[1rem]'/>
            <StarIcon  className=' text-yellow-400 w-[1rem] h-[1rem]'/>
            <StarIcon  className=' text-yellow-400 w-[1rem] h-[1rem]'/>
        </div>
        <h1 className='mt-[0.4rem] text-[20px] text-black capitalize font-bold'>{name}</h1>
        <p className='text-[15px] text-black opacity-70 mt-[0.4rem]'>{city}</p>
        <div  className='w-[100%] opacity-60 h-[0.8px] mt-[1rem] mb-[1rem] bg-black'></div>
        <div className='flex mt-[0.5rem] items-center space-x-3'>
            <h1 className='border-[2px] rounded-md border-opacity-50 text-black  font-bold px-3 py-1 border-black'>5/5</h1>
            <h1 className='text-[16px] flex items-center space-x-4 font-bold text-black'>
                <span>Excellent</span>
                <span className='text-[15px] text-black opacity-70 font-normal'> ({reviewNum} Reviews)

                </span>
            </h1>

        </div>

        <h1 className='text-[15px] mt-[1rem] flex items-center space-x-3'>
            <span className='text-[15px] text-[black] opacity-70'>From :</span>
            <span className='text-[16px] text-orange-600 font-bold '>
             {price}</span>
            <span className='text-[15px] text-black opacity-70'>/night</span>
        </h1>


    </div>
    </div>
  )
}

export default HotelCard