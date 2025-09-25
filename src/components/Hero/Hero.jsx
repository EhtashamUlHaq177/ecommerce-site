import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import heroVidoe from '../../assets/file.mp4'

function Hero() {
  return (
    <>
    <div className='Hero'>
    <div className='HeroLeft'>
    </div>
    <div className='HeroVideo'>
        <video  width="690" height="828" autoPlay muted loop   >
          {/* <source src="src\assets\file.mp4" type="video/mp4"/> */}
           <source src={heroVidoe} type="video/mp4"/>
       </video>
    </div>
    </div>
    <div className='HeroText'>
       <div className='HerotextHead'>
        <p>Designed </p>
        <p>to Move</p>
       </div>
       <div className='HeroTextPara'>
        <p>step into a world where every shoe is a masterpiece - crafted</p>
        <p>from the finest materials for elegance, comfort, and style</p>
       </div>
       <Link to="/shop"><button className='HeroTextButton'>Shop Now</button></Link>
    </div>
    </>
  )
}
export default Hero;