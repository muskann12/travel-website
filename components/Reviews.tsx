import React from 'react'
import ReviewSlider from './helper/ReviewSlider'

export const Reviews = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
        <h1 className='heading'>Client Reviews</h1>
        <div className=' mt-[4rem] w-[80%] mx-auto'><ReviewSlider />
        </div>
    </div>
  )
}
