import { Link } from 'react-router-dom'
import { logo } from '../../assets/home'
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";


const navList = [
    { name: 'Home', link: '/'},
    { name: 'Services', link: '/'},
    { name: 'Project', link: '/'},
    { name: 'About Us', link: '/'},
    { name: 'Contact Us', link: '/'},
]

const navbar = () => {
    const [showNav, setShowNav] = useState(false);

  return (
    <div className='relative'>
        <div className='fixed z-20 w-full'>
            <div className='flex justify-between items-center px-5 md:px-16 mx-auto py-5 bg-[#0E0202]'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <ul className={`lg:flex gap-7 font-medium text-white hidden`}>
                    {navList.map(nav => (
                        <Link to={nav.link} key={nav.name}>{nav.name}</Link>
                    ))}
                </ul>
                <span className='lg:hidden text-white text-4xl' onClick={() => setShowNav(!showNav)}> 
                    {showNav ? <FaTimes /> : <FaBars />}
                </span> 
            </div>
            { showNav && (
                <ul className={`flex flex-col justify-center items-center w-full absolute top-20 gap-5 py-5 z-10 font-semibold bg-white text-[#1E0734]`}>
                    {navList.map(nav => (
                        <Link to={nav.link} key={nav.name}>{nav.name}</Link>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default navbar