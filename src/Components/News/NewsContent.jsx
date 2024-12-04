import React from 'react'
import '../../Components/News/NewsContent.css'
import { FaArrowRight } from "react-icons/fa";
import { newsArry } from '../../../Data.js/news'
import { Link, useNavigate } from 'react-router-dom';



function NewsContent() {
//    const navigate= useNavigate();
//     function handleNavigate(){
//         newsArry.find((item)=>(
//                item.id === parseInt(id);
//             navigate(`/news-post/${item.id}`)
//         ) 
//        )
//     }
  return (
    <div className='news'>
        <div>{
            newsArry.map((data)=>(
                <>
                <div >
                    <div>
                        <Link
                        to={`/news-post/${data.title}`}>
                        <img
                        className='cursor'
                         src={data.img} alt="" />
                        </Link>
                        </div>
                    <div>
                        <div className='position'></div>
                        <h4 className='text-gradient'>july 6, 2024</h4>
                        <Link to={`/news-post/${data.title}`} className='link'><h2 className='cursor'>{data.title}</h2></Link>
                        <p>{data.descp}</p>
                        <div className='text-gradient cursor'>
                            <a href={`/news-post/${data.title}`}>Read full post
                            <span >
                            <FaArrowRight />
                            </span></a>
                           
                        </div>
                    </div>
                 
                </div>
                </>
            ))
            }

        </div>
    </div>
  )
}

export default NewsContent