import React from 'react'
import Header from '../Components/Header/Header'
import ContactHero from '../Components/Contact/ContactHero'
import ContactBody from '../Components/Contact/ContactBody'
// import Faq from '../Components/Faq'
import Start from '../Components/Start'
import Footer from '../Components/Footer/Footer'

function Contact() {
  return (
    <div>
        <Header />
        <ContactHero />
        <ContactBody />
        <Start />
        <Footer />
    </div>
  )
}

export default Contact