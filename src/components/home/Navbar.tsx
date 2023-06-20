import { Link } from 'react-router-dom'
import { logo } from '../../assets/home'
import Button from '../global/Button'
import { useState } from 'react';


const navList = [
    { name: 'Home', link: '/'},
    { name: 'Services', link: '/'},
    { name: 'Project', link: '/'},
    { name: 'About US', link: '/'},
    { name: 'Contact US', link: '/'},
]

const navbar = () => {
    const [showNav, setShowNav] = useState(false);

  return (
    <div className='relative'>
        <div className='flex justify-between items-center w-[90%] mx-auto py-5'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <ul className={`lg:flex gap-7 font-medium text-white hidden`}>
                {navList.map(nav => (
                    <Link to={nav.link} key={nav.name}>{nav.name}</Link>
                ))}
            </ul>
            {/* <img src={menu} alt="menu" className='lg:hidden' onClick={() => setShowNav(!showNav)}/> */}
        </div>
        { showNav && (
            <ul className={`flex flex-col justify-center items-center w-full absolute gap-5 py-5 z-10 font-semibold bg-white text-[#1E0734]`}>
                {navList.map(nav => (
                    <Link to={nav.link} key={nav.name}>{nav.name}</Link>
                ))}
            </ul>
        )}
    </div>
  )
}

export default navbar