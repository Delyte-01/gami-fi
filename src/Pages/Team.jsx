import React from 'react'
import HeroGlobal from '../Components/HeroGlobal'
import Header from '../Components/Header/Header'
import Management from '../Components/Team/Management'
import Footer from '../Components/Footer/Footer'
import Start from '../Components/Start'

function Team() {
  return (
    <div>
        <Header />
        <HeroGlobal 
        title={'our team'}/>
        <Management 
        title={"core team"}
        name1={"jessica robinson"}
        name2={"john stinson"}
        name3={"brooklyn simmons"}
        work1={"designer"}
        work2={"project manager"}
        work3={"ceo"}
        heading={"management and head office team"}
        img1={"https://res.cloudinary.com/dk5mfu099/image/upload/v1730982321/62c30ff2498c3ec5b4a161e4_Image_Team_01-p-500_1_sm9l1s.jpg"}
        img2={"https://res.cloudinary.com/dk5mfu099/image/upload/v1730982326/62c30ff1f5f3e341e6d2e756_Image_Team_03-p-500_rnox5s.jpg"}
        img3={"https://res.cloudinary.com/dk5mfu099/image/upload/v1730982326/62c30ff2483335fef1987c6f_Image_Team_02-p-500_xe12ph.jpg"}/>
        <Management 
        title={"product team"}
        name1={"guy hawkins"}
        name2={"arlene mcCoy"}
        name3={"ericksen marshall"}
        work1={"designer"}
        work2={"developer"}
        work3={"developer"}
        heading={"Team of creators and developers"}
        img1={"https://res.cloudinary.com/dk5mfu099/image/upload/v1730982321/62c418b27f0ed32725858603_team_05_duytf8.jpg"}
        img2={"https://res.cloudinary.com/dk5mfu099/image/upload/v1730982321/62c4133f06edbaadd437e103_team_01_ykmc5c.jpg"}
        img3={"https://res.cloudinary.com/dk5mfu099/image/upload/v1730982321/62c415a7fb36cf574f562737_team_02_u1k6on.jpg"}/>
        <Start />
        <Footer />
    </div>
  )
}

export default Team