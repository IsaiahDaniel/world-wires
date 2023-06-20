import { About, Footer, Header, Partners, Why} from '../components/home'


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Header/>
      <Partners/>
      <About/>
      <Why/>
     {/* <Footer/> */}
    </>
  )
}

export default Home