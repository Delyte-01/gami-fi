import React from 'react'
import '../../Components/News/NewsDetails.css'
import { useParams } from 'react-router-dom'
import { newsArry } from '../../../Data.js/news';
import Button from '../Button';

function NewsDetailsPage() {
    const { title}= useParams();
    console.log(title)
    const foundItem = newsArry.find(item => item.title === (title));
    
  return (
    <div className='containerNews'>
        <div className='bg-news-home'></div>
        <div>
            <div>
                <div>
                    <h2>{foundItem.type}</h2></div>
                <h1>{foundItem.title}</h1>
                <h4>july 5, 2024</h4>
                <div className='imag-crd'>
                    <img src={foundItem.img} alt="" />
                </div>
            </div>
            <div>
                <p>{foundItem.fullDesc}</p>
            </div>
        </div>
        <div>
            <a href="/news">
            <Button title={"bact to news"} />
            </a>
        </div>
    </div>
  )
}

export default NewsDetailsPage