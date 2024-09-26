import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
        
        const ReviewSlider = () => {
          return (
            <Carousel  additionalTransfrom={0} 
            arrows={true}
            autoPlaySpeed={5000}
            centerMode = {false}
            infinite
            responsive={responsive}
            itemClass='item'>

               <ClientReview  image='/images/client1.png' name='Asad Haroon'/>
               <ClientReview image='/images/client2.jpg ' name=' Noor Sidddiqui'  />
               <ClientReview  image='/images/client3.jpg' name='Mustafa Naqvi'/>
               <ClientReview  image='/images/client4.png ' name='Afsha Ahmed'/>
               


            </Carousel>
          )
        }
        
        export default ReviewSlider