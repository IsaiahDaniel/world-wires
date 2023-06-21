import { Link } from 'react-router-dom'
import { logo } from '../../assets/home'
import { FaRegPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const navList = [
  { name: 'Project', link: '/'},
  { name: 'Portfolio', link: '/'},
  { name: 'About US', link: '/'},
  { name: 'Contact US', link: '/'},
]
const services = [
  { name: 'Business Development', link: '/'},
  { name: 'Services', link: '/'},
  { name: 'Project', link: '/'},
  { name: 'About US', link: '/'},
  { name: 'Contact US', link: '/'},
]

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="w-full bg-[#0E0202] text-white py-10">
      <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0 mx-auto w-[90%]'>
        <div className='md:w-[20%]'>
            <img src={logo} alt="" />
            <p className='mt-4 text-[#C0C1C2]'>World Wires assist international and local companies in Project financing, Business Promotion, Meeting Arrangement & Facilitation. </p>
          </div>
          <div className='md:w-[20%]'>
            <h2 className='text-2xl font-bold uppercase'>Quick Link</h2>
            <ul className={`flex flex-col gap-2 font-medium mt-4`}>
                {navList.map(nav => (
                    <Link to={nav.link} key={nav.name}>{nav.name}</Link>
                ))}
            </ul>
          </div>
          <div className='md:w-[20%]'>
            <h2 className='text-2xl font-bold uppercase'>Services</h2>
            <ul className={`flex flex-col gap-2 font-medium mt-4`}>
                {services.map(nav => (
                    <Link to={nav.link} key={nav.name}>{nav.name}</Link>
                ))}
            </ul>
          </div>
          <div className='md:w-[20%]'>
            <h2 className='text-2xl font-bold uppercase'>Contacts</h2>
            <div className='flex flex-col gap-3 mt-4'>
              <span className='flex items-center gap-5 text-sm'><FaMapMarkerAlt className='text-[#E61C1C]'/><span>1st Avenue Gwarinpa, Abuja</span></span>
              <span className='flex items-center gap-5 text-sm'><FaPhoneAlt className='text-[#E61C1C]'/><span>+234-907-7077-529</span></span>
              <span className='flex items-center gap-5 text-sm'><FaRegPaperPlane className='text-[#E61C1C]'/><span>lead@worldwiresng.com</span></span>
            </div>
          </div>
      </div>
      <p className='text-[#929399] mt-20 text-center text-[15px] px-2'>Copyright © 2023 World Wires . All Rights Reserved.</p>
    </div>
  )
}

export default Footer