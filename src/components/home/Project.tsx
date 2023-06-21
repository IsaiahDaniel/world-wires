import React from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { project1, project2 } from '../../assets/home'

type Props = {}

const Project = (props: Props) => {
  return (
    <div className='w-[90%] mx-auto my-10'>
        <div className='flex justify-between items-center my-10'>
            <h2 className='text-[32px] font-bold font-["Inter"]'>Latest Projects</h2>
            <div className='flex gap-10'>
                <FaAngleLeft className='w-8 h-8 rounded-[4px] bg-[#DDDDDD]'/>
                <FaAngleRight className='w-8 h-8 rounded-[4px] bg-[#E61C1C] text-white'/>
            </div>
        </div>
        <div className='flex gap-2 md:gap-8'>
            <img src={project1} alt="" className='w-[50%] h-[50%] md:w-[100%] md:h-[100%]' />
            <img src={project2} alt="" className='w-[50%] h-[50%] md:w-[100%] md:h-[100%]' />
        </div>
    </div>
  )
}

export default Project