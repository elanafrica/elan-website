import Image from 'next/image'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Blog from './Blog'
import Careers from './Careers'
import ContactUs from './ContactUs'
import OurWork from './OurWork'
import Portfolio from './Portfolio'
import PrivacyTermsCondition from './PrivacyTermsCondition'
import Services from './Services'
import Testimonials from './Testimonials'
import TrainingProg from './TrainingProg'
import FAQ from './FAQ'


export default function Home() {
  return (
    <main>
      <NavBar />
      <Footer />
      <Button />
      <HomePage />
      <AboutUs />
      <Blog />
      <Careers />
      <ContactUs />
      <OurWork />
      <Portfolio />
      <PrivacyTermsCondition />
      <Services />
      <Testimonials />
      <TrainingProg />
      <FAQ />
    </main>
  )
}
