import { About, Hero, Navbar, Why } from '../components/home'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Why/>
    </>
  )
}

export default Home