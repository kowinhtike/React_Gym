import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/* the best add */}
                <div className="the-best-ad">
                    <div>   </div>
                    <span>Thes best fitness club in the town</span>
                </div>
                {/* Hero Heading */}
                <div className='hero-text'>
                    <div>
                        <span class='stroke-text'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div><span>
                        Ideal Body</span>
                    </div>
                    <div>
                        In here we will help you to shape and build your ideal body and live up your
                        life to fullest
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div><span>+140</span><span>expert coachs</span></div>
                    <div><span>+978</span><span>members joined</span></div>
                    <div><span>+50</span><span>fitness programs</span></div>
                </div>

                {/* hero button */}
                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>

            <div class="right-h">
                <button className='butt btn'>Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} />
                    <span>Heart Rate</span><span>220 bpm</span>
                </div>

                {/* hero images */}
                <img className='hero-image' src={hero_image} alt="" />
                <img className='hero-image-back' src={hero_image_back} alt="" />

                {/* calories */}

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero