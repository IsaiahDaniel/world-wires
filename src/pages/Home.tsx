import { About, Hero, Navbar, Partners, Why } from '../components/home'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Why/>
      <Partners/>

    </>
  )
}

export default Home