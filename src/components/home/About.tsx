import img1 from '../../assets/gallary/img1.png'
import img2 from '../../assets/gallary/img2.png'
import img3 from '../../assets/gallary/img3.png'
import img4 from '../../assets/gallary/img4.png'
import { Carousel } from "@material-tailwind/react";

const images = [img1, img2, img3, img4]

type Props = {}

const About = (props: Props) => {
  return (
    <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto my-20 gap-10">
          <div className="md:w-[55%]">
            <h2 className="text-2xl md:text-5xl font-['Inter'] font-bold">“Your Choice Partner In Business Development”</h2>
          </div>
          <div className="md:w-[45%] flex flex-col gap-4 text-sm md:text-base text-[#3E3535] md:px-5">
            <p>World Wires assist international and local companies in Project financing, Business Promotion, Meeting Arrangement & Facilitation. Our services also include Micro-Lending and Oil and Gas Trading. We provide high quality, results-focused Services.</p>
            <p>For over 10 years we have helped companies promote projects in Nigeria and other African countries, sourced financial and technical partnerships for local companies and provided funding for over 1000 small businesses.</p>
          </div>
        </div>
        <div className='w-full px-2 md:flex hidden'>
          {images.map(img => (
            <div>
              <img src={img} alt=""/>
            </div>
          ))}
        </div>

          {/* Carousel On mobile */}
        <div className="w-full h-[500px] py-10 mx-auto md:hidden">
          <Carousel
            className="rounded-xl"
            transition={{ duration: 2 }}
            loop={true}
            autoplay={true}
            prevArrow={() => null}
            nextArrow={() => null}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-6 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-5 w-5 cursor-pointer rounded-2xl transition-all ${
                      activeIndex === i ? "bg-[#E61C1C]" : "bg-[#D9D9D9]"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {images.map(img => (
              <div className='h-[350px] overflow-hidden' >
                <img src={img} alt="" className='w-full'/>
              </div>
            ))}
          </Carousel>  
        </div>
    </div>
  )
}

export default About