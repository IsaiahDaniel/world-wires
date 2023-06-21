import React from 'react'
import { Navbar, Hero } from '.'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-full bg-mobileHeroBgImg md:bg-heroBgImg bg-cover bg-no-repeat'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header