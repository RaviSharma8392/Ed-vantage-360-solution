
import Header from '../components/Header'
import Reviews from '../components/Reviews'
import ServiceComponent from '../components/ServiceCard'
import ShowText from '../components/ShowText'
import About from './About'

 const Home = () => {
  return (
    <div>
        <Header/>
        <ShowText/>

    <ServiceComponent/>
    <About/>
    <Reviews/>
  </div>
  )
}
export default Home