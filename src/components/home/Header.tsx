import React from 'react'
import { Navbar, Hero } from '.'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-[#0E0202]'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header