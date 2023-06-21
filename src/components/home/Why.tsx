import React from 'react'
import { diversityIcon, qualityIcon, passionIcon } from '../../assets/home'

const why = [
  {title: 'Quality Services', img: qualityIcon, description: 'We approach each and every client case with precision and detail, while holding ourselves accountable for the actions we take. We are committed to a culture of performance that demands outstanding results.'},
  {title: 'Passion for Results', img: passionIcon, description: 'Discover the emerging opportunities most relevant to your strategy by working with our community.'},
  {title: 'Diversity & Inclusion', img: diversityIcon, description: 'We develop an action plan and support you toreach an agreement with your chosen business-partner or an investment contract with the Nigerian company'},
]

type Props = {}

const Why = (props: Props) => {
  return (
    <div className='w-[90%] mx-auto text-center my-20'>
      <h2 className='text-[40px] text-[#E61C1C] font-bold'>Why World Wire</h2>
      <div className='flex flex-col md:flex-row justify-between my-10'>
          {why.map((item, i) => (
              <div className='flex flex-col items-center justify-center gap-6 md:w-[33%]'>
                <img src={item.img} alt={item.title} />
                <h3 className='text-xl font-["Inter"] font-bold text-[#1B1D21]'>{item.title}</h3>
                <p className='text-[#60626D]'>{item.description}</p>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Why