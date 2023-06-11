import React from 'react'
import {artCard, artCard1, artCard2} from '../../assets/home'


type Props = {}

const Team = (props: Props) => {
  return (
    <div className='w-[80%] mx-auto my-20'>
        <div className="flex flex-col leading-none w-full lg:w-[60%]">
              <h1 className='text-[32px] lg:text-6xl font-medium '>Meet our</h1>
              <h1 className='text-[32px] lg:text-6xl font-medium self-end mr-36 lg:mr-72'>team</h1>
              <p className='lg:ml-16 text-xs lg:text-lg font-["Roboto"] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 w-[90%] mx-auto my-16 gap-3 md:gap-10'>
            <img src={artCard} alt=""  />
            <img src={artCard1} alt="" />
            <img src={artCard2} alt="" />
        </div>
    </div>
  )
}

export default Team