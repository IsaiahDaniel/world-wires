import React from 'react'
import { greenhost, yodgy, atomic, boosterio, mind } from '../../assets/home'

type Props = {}

const Partners = (props: Props) => {
  return (
    <div className="bg-[#F6F4F4] grid grid-cols-2 md:grid-cols-5 gap-5 rounded-xl w-[90%] md:w-[70%] mx-auto p-10 -mt-10">
        <img src={greenhost} alt="" />
        <img src={yodgy} alt="" />
        <img src={atomic} alt="" />
        <img src={boosterio} alt="" />
        <img src={mind} alt="" />
    </div>
  )
}

export default Partners