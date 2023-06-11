import { About, Faq, Footer, Hero, Navbar, Partners, Team, Values, Why } from '../components/home'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Why/>
      <Partners/>
      <Values/>
      <Team/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home