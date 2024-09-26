import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const DestinationSlider = () => {
  return (
    <Carousel 
      additionalTransfrom={0} 
      arrows={true} 
      autoPlay={true} 
      autoPlaySpeed={5000} 
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass='item'
    >
      {/* Slide 1 */}
      <div className='text-center'>
        <Image
          src="/images/hunzapic.png"
          alt="destination"
          width={200}
          height={200}
          className='rounded-full mx-auto'
        />
        <h1 className='destination_h1'>Hunza</h1>
        <p className='destination_p'> 7 Hotels</p>
      </div>

      {/* Slide 2 */}
      <div className='text-center'>
        <Image
          src="/images/skardu.png"
          alt="destination"
          width={200}
          height={200}
          className='rounded-full mx-auto'
        />
        <h1 className='destination_h1'>Skardu</h1>
        <p className='destination_p'> 4 Hotels</p>
      </div>

      {/* Slide 3 */}
      <div className='text-center'>
        <Image
          src="/images/Kalam.png"
          alt="destination"
          width={200}
          height={200}
          className='rounded-full mx-auto'
        />
        <h1 className='destination_h1'>Kalam</h1>
        <p className='destination_p'> 11 Hotels</p>
      </div>

      {/* Add more slides as needed */}


      <div className='text-center'>
        <Image
          src="/images/Naltar.png"
          alt="destination"
          width={200}
          height={200}
          className='rounded-full mx-auto'
        />
        <h1 className='destination_h1'>Naltar Valley</h1>
        <p className='destination_p'> 8 Hotels</p>
      </div>
    </Carousel>
  );
}

export default DestinationSlider;

