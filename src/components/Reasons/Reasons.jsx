import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"



const Reasons = () => {
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <div className="p-left">
                    <img src={image1} />
                </div>
                <div className="p-right">
                    <img src={image2} />
                    <div>
                        <img src={image3} />
                        <img src={image4} />
                    </div>
                </div>

            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div className='text-zone'>
                    <span className='stroke-text'>Why</span>
                    <span>Choose us?</span>
                </div>

                {/* div(div>img*span) */}
                <div className='details-r'>
                <div><img src={tick} alt=""></img><span> OVER 140+ expert coachs</span></div>
                <div><img src={tick} alt="" /><span></span> train smarter and faster than before</div>
                <div><img src={tick} alt="" /><span></span> 1 free program for new member</div>
                <div><img src={tick} alt="" /><span></span> reliable partners</div>
                </div>
                <div className='partners-name'>
                    OUR PARTNERS
                </div>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons