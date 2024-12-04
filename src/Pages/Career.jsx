import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroGlobal'
import TaskProgress from '../Components/Carrer/TaskProgress'
import CarrerList from '../Components/Carrer/CarrerList'
import Start from '../Components/Start'
import Footer from '../Components/Footer/Footer'

function Career() {
  return (
    <div>
        <Header />
        <HeroGlobal  title={"join us"}/>
        <TaskProgress />
        <CarrerList />
        <Start />
        <Footer />
    </div>
  )
}

export default Career