import React from 'react'
import Button from '../global/Button'
import { heroImg } from '../../assets/home'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col items-center md:flex-row gap-8 w-full text-white'>
        <div className='flex flex-col gap-4 w-[55%] pl-16 pr-10'>
          <h1 className='text-[54px] font-bold leading-[114.5%]'>Business Development and Finance Solutions</h1>
          <p className='pr-10'>We have created in response to a restrictive credit market environment in Africa and we positioned to provide non-traditional, alternative loan products to businesses</p>
          <div className='flex justify-between'>
            <Button buttonType='button' text='Free Consultation' classNames='bg-white text-[#E61C1C]'/>
            <Button buttonType='button' text='Learn More' classNames='border border-[#fff]'/>
          </div>
        </div>
        <div className='w-[45%]'>
          <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero