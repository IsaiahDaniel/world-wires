import React from 'react'
import {artCard, artCard1, artCard2} from '../../assets/home'


type Props = {}

const Values = (props: Props) => {
  return (
    <div className='my-5'>
        <h2 className='text-[32px] md:text-[64px] font-semibold text-center pb-10'>We value</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 w-[70%] mx-auto gap-3 md:gap-10'>
            <img src={artCard} alt=""  />
            <img src={artCard1} alt="" />
            <img src={artCard2} alt="" />
        </div>
    </div>
  )
}

export default Values