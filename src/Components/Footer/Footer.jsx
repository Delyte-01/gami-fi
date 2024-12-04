import React, { useState } from 'react'
import '../Footer/Footer.css'
import Logo from '../Header/Logo'


export default function Footer() {
   
    
  return (
    <div className='footer'>
        <div>
            <h3>Trusted by Global Game Platforms</h3>
            <div>
                <div>
                    <a href="https://www.riotgames.com/en">
                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980991/62b055491d12a047aa7aa7f3_Mask_group_q7blg7.png" alt="" />

                    </a>
                </div>
                <div>
                    <a href="https://store.steampowered.com/">

                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980990/62b05548d93f7672d57b2ce9_Mask_group-1_mdpixi.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.epicgames.com/site/en-US/home">

                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980990/62b055472ec6e730158b3037_image_11_rophdm.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.playstation.com/en-us/">

                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1730980989/62b0554744c13bd03c94a3f7_Mask_group-3_z1srkq.png" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.xbox.com/en-US/?msockid=075b3a8c0a4f6c673ed52f860b8f6d9b">
                    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733136352/xbox_kazp78.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <div>
            <div>
                <a href="/">
                <Logo /></a>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque.</p>
            </div>
                <div>
                    <h1>Receive notifications about news and new game releases</h1>
                    <div>
                    <input type="text" placeholder='email'/>
                    <button>send</button>
                    </div>
                    
                </div>
            
        </div>
        <div>
            &copy; playo 128.All Rights Reserved 2024 Licensing
            <p>WebFlow Templates by 128.digital. Powered by Webflow</p>
        </div>
        <div></div>
    </div>
  )
}
