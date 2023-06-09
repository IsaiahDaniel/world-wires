import React from 'react'

type Props = {}

const Partners = (props: Props) => {
  return (
    <div className={`bg-mobileDownBgImg lg:bg-downBgImg h-[944px] bg-cover bg-no-repeat w-full px-5 lg:px-10`}>
        <div className='flex lg:flex-row flex-col justify-center items-center gap-10 lg:w-[80%] mx-auto pt-80'>
            <div className='lg:flex flex-col gap-8 text-5xl hidden'>
                <h3 className='text-[#FAF9FF] opacity-25 px-3'>partnerships</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='text-[#FAF9FF] opacity-50 px-3'>Nft marketplace</li>
                    <li className="lg:bg-[#7D2AE7] text-[#FAF9FF] rounded-xl px-3 py-2 font-['Brightwall Personal Use']">Community</li>
                    <li className='text-[#FAF9FF] opacity-50 px-3'>Metaverse</li>
                    <li className='text-[#FAF9FF] opacity-25 px-3'>Enora</li>
                </ul>
            </div>
            <div className='bg-[#FAF9FF] flex flex-col gap-4 text-center md:text-left px-14 py-14 md:w-[504px]'>
                <h4 className='text-[#3C1360] md:text-[32px] font-medium leading-none'>Talk about what we aim to achieve with this community 2 to 3 point is okay</h4>
                <p className='text-[#FD8EEA] text-xs md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
            </div>
        </div>
    </div>
  )
}

export default Partners