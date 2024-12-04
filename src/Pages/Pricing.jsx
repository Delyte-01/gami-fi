import React from 'react'
import Header from '../Components/Header/Header'
import HeroPricing from '../Components/Pricing/HeroPricing'
import PricingService from '../Components/Pricing/PricingService'
import Plans from '../Components/Pricing/Plans'
import PricingTable from '../Components/Pricing/PricingTable'
import Start from '../Components/Start'
import Footer from '../Components/Footer/Footer'

function Pricing() {
  return (
    <div>
        <Header />
        <HeroPricing />
        <PricingService />
        <Plans />
        <PricingTable />
        <Start />
        <Footer/>
    </div>
  )
}

export default Pricing