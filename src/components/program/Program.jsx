import React from 'react'
import "./Program.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

const Program = () => {
    console.log(programsData)
  return (
   <div className="Programs" id="programs">
    {/* header */}
    <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
    </div>
    <div className='program-categories'>
        {programsData.map((program)=>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span className="program details"> {program.details} </span>
                <div className="join-now">
                    <span> Join Now </span> <img src={RightArrow} alt="" />
                </div>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Program