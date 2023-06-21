import { About, ContactUs, Footer, Header, Partners, Project, Why} from '../components/home'


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Header/>
      <Partners/>
      <About/>
      <Why/>
      <Project/>
      <ContactUs/>
     <Footer/>
    </>
  )
}

export default Home