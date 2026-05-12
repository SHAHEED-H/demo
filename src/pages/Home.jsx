import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import About from '../components/About'
import VideoCarousel from '../components/VideoCarousel'
import Branches from '../components/Branches'
import Catering from '../components/Catering'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />  
      <About />
      <Catering />
      <VideoCarousel /> 
      <Branches />
      <Testimonials />
      <CTA /> 
    </main>
  )
}