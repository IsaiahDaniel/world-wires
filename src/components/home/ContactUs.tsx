import { shape } from '../../assets/home'
import Button from '../global/Button'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className='bg-[#E61C1C] w-full my-10 px-8 pt-12 pb-40 md:pl-16 md:pr-32 md:py-12 flex flex-col md:flex-row gap-20 text-white relative'>
        <div className='md:w-[40%]'>
            <h4 className='font-extrabold'>Contact Us</h4>
            <h2 className='text-2xl md:text-4xl font-bold pt-4'>For any questions? <br/>Write or call us <br/> We are available to write back within 4 hour</h2>
        </div>
        <form className='flex flex-col md:w-[40%] gap-5'>
            <input type="text" placeholder='Your Name' className='px-5 py-4 border border-[#F5A4A4] rounded-lg' />
            <input type="email" placeholder='Your Email' className='px-5 py-4 border border-[#F5A4A4] rounded-lg' />
            <textarea name="" id="" cols={30} rows={6} placeholder='Message' className='px-5 py-4 border border-[#F5A4A4] rounded-lg'></textarea>
            <Button text='Send' buttonType='submit' classNames='bg-transparent border border-[#F5A4A4]'/>
        </form>
        <img src={shape} alt="" className='absolute bottom-0 right-0' />
    </div>
  )
}

export default ContactUs