import img1 from '../../assets/gallary/img1.png'
import img2 from '../../assets/gallary/img2.png'
import img3 from '../../assets/gallary/img3.png'
import img4 from '../../assets/gallary/img4.png'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="w-full">
        <div className="flex justify-between items-center w-[90%] mx-auto my-20 gap-10">
          <div className="w-[55%]">
            <h2 className="text-5xl font-['Inter'] font-bold">“Your Choice Partner In Business Development”</h2>
          </div>
          <div className="w-[45%] flex flex-col gap-4 text-[#3E3535] px-5">
            <p>World Wires assist international and local companies in Project financing, Business Promotion, Meeting Arrangement & Facilitation. Our services also include Micro-Lending and Oil and Gas Trading. We provide high quality, results-focused Services.</p>
            <p>For over 10 years we have helped companies promote projects in Nigeria and other African countries, sourced financial and technical partnerships for local companies and provided funding for over 1000 small businesses.</p>
          </div>
        </div>
        <div className='w-full px-2 flex justify-center'>
          <img src={img1} alt=""/>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
    </div>
  )
}

export default About