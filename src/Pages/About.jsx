import React from 'react'
import Header from '../Components/Header/Header'
import AboutHero from '../Components/About/AboutHero'
import AboutContent1 from '../Components/About/AboutContent1'
import AboutContent2 from '../Components/About/AboutContent2'
import AboutContent3 from '../Components/About/AboutContent3'
import Footer from '../Components/Footer/Footer'
import Testimonial from '../Components/About/Testimonial'

function About() {
  return (
    <div>
        <Header />
        <AboutHero />
        <AboutContent1 />
        <AboutContent2 />
        <AboutContent3 />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default About