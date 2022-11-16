import React from 'react'
import './Service.css'
import Card from "../card/Card";
import Specemoji from "../img/specs.png";
import Resume from './resume.pdf';

const Service = () => {
  return (
    <div className="service">
    <div className="work">
      <span>My services</span>
       <spane>
        Tech enthusiast and keen to learn new things.
        </spane> 
        <a href={Resume} download>
        <button className="button sbutton">Download CV</button>
        </a>
        <div className="blur sblur1" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
        <div style={{left: '15rem'}}>
            <Card
            emoji={Specemoji}
            heading={'Developer'}
            detail={"HTML,CSS,Javascript,Java,c++,React.js,MATLAB,Excel,Powerpoint,Microsoft Word"}
            />
        </div>
        
   
      </div>
      </div>
  )
}

export default Service