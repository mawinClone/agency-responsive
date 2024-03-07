import React from 'react'
import './AboutSlide02.css'

const AboutSlide02 = () => {
  return (
    <div className='AboutSlide02'>
        <div className='team-container'>

            <div style={{marginBottom:"30px", marginTop:"100px"}}>
                <h1 style={{display:"inline-block", marginRight:"15px", color:"#6100FF"}} className="about-topic">DUDESTAR </h1>
                <h1 style={{display:"inline-block", color:"black"}} className="about-topic">TEAM</h1>
            </div>

            <div className='team-flex'>
                <div className='team-item'>
                    <div className='team-pic'>pic</div>
                    <div className='team-name'><p>ICE THAMMARONG</p></div>
                </div>
                <div className='team-item'>
                    <div className='team-pic'>pic</div>
                    <div className='team-name'><p>Q KOMKRICH</p></div>
                </div>
                <div className='team-item'>
                    <div className='team-pic'>pic</div>
                    <div className='team-name'><p>JUMP SIRISUDA</p></div>
                </div>
            </div>

            <div className='team-flex'>
                <div className='team-item-circle'>
                    <div className='team-pic-circle'></div>
                    <div className='team-name'><p>JUMP SIRISUDA</p></div>
                </div>
                <div className='team-item-circle'>
                    <div className='team-pic-circle'></div>
                    <div className='team-name'><p>JUMP SIRISUDA</p></div>
                </div>

            
        </div>
        </div>
        

    </div>
  )
}

export default AboutSlide02