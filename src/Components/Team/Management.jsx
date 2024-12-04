import React from 'react'
import '../../Components/Team/Management.css'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";


function Management({img1,img2,img3,title,heading,name1,name2,name3,work1,work2,work3}) {
  return (
    <div className='management'>
        <div>
            <h3>{title}</h3>
            <h1>{heading}</h1>
        </div>
        <div>
            <div>
                <div>
                    <img src={img1}alt="" />
                </div>
                <div>
                    <div>
                        <h2>{name1}</h2>
                        <p >{work1}</p>
                    </div>
                    <div>
                        <span><SlSocialInstagram /></span>
                        <span><SlSocialFacebook /></span>
                        <span><SlSocialTwitter /></span>
                        <span><FaWhatsapp /></span>
                    </div>
                </div>
            </div>
            <div>
            <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <div>
                        <h2>{name2}</h2>
                        <p>{work2}</p>
                    </div>
                    <div>
                        <span><SlSocialInstagram /></span>
                        <span><SlSocialFacebook /></span>
                        <span><SlSocialTwitter /></span>
                        <span><FaWhatsapp /></span>
                    </div>
                </div>
                
            </div>
            <div>
            <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <div>
                        <h2>{name3}</h2>
                        <p>{work3}</p>
                    </div>
                    <div>
                        <span><SlSocialInstagram /></span>
                        <span><SlSocialFacebook /></span>
                        <span><SlSocialTwitter /></span>
                        <span><FaWhatsapp /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Management