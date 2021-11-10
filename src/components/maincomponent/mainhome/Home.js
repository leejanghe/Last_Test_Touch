import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../maincss/Mainpagehome.css'
import { Link } from 'react-router-dom'

function Home() {
    const settings ={
        autoplay: true,
        autoplaySpeed: 2000,
        infinit:true,
        dots:true,
        slidesToShow: 1,
        // arrows:true,
        slidesToScroll:1,
        // lazyLoad:true
    }
    return (
        <div>
            <Slider {...settings}>
            <div>
            <div className="part1-background">    
                        <h1>아무 생각 없이 그냥 보고 느끼기만 하세요!</h1>
                        {/* <Link to='/Login' ><button className="part4-btn">Get started</button></Link> */}
            </div>
        </div>
        <div>
            <div className="part2-background">    
                        <h1>당신의 눈과 귀를 즐겁게 해줄게요!</h1>
                        {/* <Link to='/Login' ><button className="part4-btn">Get started</button></Link> */}
            </div>
        </div>
        <div>
            <div className="part3-background">    
                        <h1>터치는 당신과 함께 합니다!</h1>
                        {/* <Link to='/Login' ><button className="part4-btn">Get started</button></Link> */}
            </div>
        </div>
        <div>
            <div className="part4-background">    
                        <h1>힐링 준비 되셨나여 ?!!!</h1>
                        <Link to='/heal/moveimg' ><button className="part4-btn">Get started</button></Link>
            </div>
        </div>
            </Slider>
        </div>
    )
}

export default Home
