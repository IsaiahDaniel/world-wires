import React from 'react'
import Button from '../global/Button'
import { heroImg } from '../../assets/home'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center md:flex-row gap-8 w-[90%] mx-auto text-white py-28 md:py-10'>
        <div className='flex flex-col gap-4 md:w-[55%] md:pr-10'>
          <h1 className='text-[32px] md:text-[54px] font-bold leading-[114.5%]'>Business Development and Finance Solutions</h1>
          <p className='md:pr-10 text-sm md:text-base text-center md:text-left'>We have created in response to a restrictive credit market environment in Africa and we positioned to provide non-traditional, alternative loan products to businesses</p>
          <div className='flex flex-col md:flex-row justify-between gap-10'>
            <Button buttonType='button' text='Free Consultation' classNames='bg-white text-[#E61C1C]'/>
            <Button buttonType='button' text='Learn More' classNames='border border-[#fff]'/>
          </div>
        </div>
        <div className='md:w-[45%]'>
          <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero