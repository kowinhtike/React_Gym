import "./Testimonials.css"
import { testimonialsData } from "../../data/testimonialsData"
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"

function Testimonials() {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length
    return <>
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>Say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: "var(--orange)" }} >{testimonialsData[selected].name}</span>
                    <span>{testimonialsData[selected].status}</span>
                </span>
            </div>
            <div className="right-t">

                <div className="arrows">
                   
                    <img onClick={()=>{
                         const  lastindex = tLength-1;
                     selected === 0 ? setSelected(tLength-1) : setSelected((pre)=> pre -1)
                    }}  src={leftArrow} alt="" />
                    <img onClick={()=>{
                       selected === tLength-1 ? setSelected(0) : setSelected((pre) => pre + 1)
                    }} src={RightArrow} alt="" />
                </div>
    
            
             <img src={testimonialsData[selected].image} alt="" />
         

            </div>
        </div>
    </>
}
export default Testimonials;

// if(selected+1<testimonialsData.length){
//     setSelected(selected+1)
//     }